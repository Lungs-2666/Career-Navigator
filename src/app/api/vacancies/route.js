import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongo'
import { ObjectId } from 'mongodb'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const skillName = searchParams.get('skill')
    const title = searchParams.get('title')

    const { db } = await connectToDatabase()

    const filter = {}
    if (title) {
      filter.title = { $regex: title, $options: 'i' }
    }
    if (skillName) {

      const skill = await db.collection('skills').findOne({ name: skillName })
      if (skill) {
        filter.skillIds = { $in: [skill._id] }
      }
    }

    const vacancies = await db.collection('vacancies')
      .find(filter)
      .limit(50)
      .toArray()

    // Подгружаем данные навыков для каждой вакансии
    const vacanciesWithSkills = await Promise.all(vacancies.map(async (vacancy) => {
      if (vacancy.skillIds && vacancy.skillIds.length > 0) {
        const skills = await db.collection('skills')
          .find({ _id: { $in: vacancy.skillIds } })
          .toArray()
        return { ...vacancy, skills }
      }
      return { ...vacancy, skills: [] }
    }))

    return NextResponse.json(vacanciesWithSkills)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}