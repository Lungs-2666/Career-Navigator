import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongo'
import { ObjectId } from 'mongodb'

export async function POST(request) {
  try {
    const { skillNames } = await request.json()
    const { db } = await connectToDatabase()
    
    // Находим ID навыков по их названиям
    const skills = await db.collection('skills')
      .find({ name: { $in: skillNames } })
      .toArray()
    
    const skillIds = skills.map(s => s._id)
    
    // Находим курсы, привязанные к этим навыкам
    const courses = await db.collection('courses')
      .find({ skillId: { $in: skillIds } })
      .toArray()
    
    // Подгружаем данные навыков для курсов
    const coursesWithSkills = await Promise.all(courses.map(async (course) => {
      const skill = await db.collection('skills').findOne({ _id: course.skillId })
      return { ...course, skill }
    }))
    
    return NextResponse.json(coursesWithSkills)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}