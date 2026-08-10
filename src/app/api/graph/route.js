import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongo'
import { ObjectId } from 'mongodb'

export async function POST(request) {
  try {
    const { jobTitle } = await request.json()
    const { db } = await connectToDatabase()

    // Ищем вакансии по названию
    const vacancies = await db.collection('vacancies')
      .find({ title: { $regex: jobTitle, $options: 'i' } })
      .toArray()

    if (vacancies.length === 0) {
      return NextResponse.json({ nodes: [], links: [] })
    }

    // Собираем все skillIds из найденных вакансий
    const allSkillIds = new Set()
    vacancies.forEach(v => {
      if (v.skillIds) {
        v.skillIds.forEach(id => allSkillIds.add(id.toString()))
      }
    })

    // Получаем данные навыков
    const objectIds = Array.from(allSkillIds).map(id => new ObjectId(id))
    const skills = await db.collection('skills')
      .find({ _id: { $in: objectIds } })
      .toArray()

    // Строим узлы
    const nodes = skills.map(skill => ({
      id: skill._id.toString(),
      label: skill.name,
      demand: skill.demand || 0
    }))

    // Строим связи (навыки, которые встречаются вместе в одной вакансии)
    const links = []
    const linkSet = new Set()

    vacancies.forEach(vacancy => {
      const skillIds = vacancy.skillIds || []
      for (let i = 0; i < skillIds.length - 1; i++) {
        for (let j = i + 1; j < skillIds.length; j++) {
          const key = [skillIds[i].toString(), skillIds[j].toString()].sort().join('-')
          if (!linkSet.has(key)) {
            linkSet.add(key)
            links.push({
              source: skillIds[i].toString(),
              target: skillIds[j].toString()
            })
          }
        }
      }
    })

    return NextResponse.json({ nodes, links })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}