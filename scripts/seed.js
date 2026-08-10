import { connectToDatabase } from '../src/lib/mongo.js'
import { ObjectId } from 'mongodb'

async function seed() {
  const { db } = await connectToDatabase()
  
  // Очистка коллекций (опционально)
  await db.collection('skills').deleteMany({})
  await db.collection('vacancies').deleteMany({})
  await db.collection('courses').deleteMany({})
  
  // Создаём навыки
  const figmaId = new ObjectId()
  const blenderId = new ObjectId()
  const uxId = new ObjectId()
  
  await db.collection('skills').insertMany([
    {
      _id: figmaId,
      name: 'Figma',
      category: 'Design',
      demand: 92,
      createdAt: new Date()
    },
    {
      _id: blenderId,
      name: 'Blender',
      category: '3D',
      demand: 60,
      createdAt: new Date()
    },
    {
      _id: uxId,
      name: 'UX Research',
      category: 'Research',
      demand: 85,
      createdAt: new Date()
    }
  ])
  
  // Создаём вакансии
  await db.collection('vacancies').insertMany([
    {
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      salaryMin: 120000,
      salaryMax: 180000,
      currency: 'RUB',
      description: 'Работа с Figma, UX Research, прототипирование',
      url: 'https://example.com/vacancy/1',
      source: 'hh.ru',
      skillIds: [figmaId, uxId],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: '3D Motion Designer',
      company: 'Animation Lab',
      salaryMin: 150000,
      salaryMax: 220000,
      currency: 'RUB',
      description: 'Blender, After Effects, анимация',
      url: 'https://example.com/vacancy/2',
      source: 'hh.ru',
      skillIds: [blenderId],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  
  // Создаём курсы
  await db.collection('courses').insertMany([
    {
      title: 'Figma для начинающих',
      platform: 'Stepik',
      url: 'https://stepik.org/course/123',
      price: 0,
      skillId: figmaId,
      createdAt: new Date()
    },
    {
      title: 'UX Research: основы',
      platform: 'Coursera',
      url: 'https://coursera.org/course/456',
      price: 3000,
      skillId: uxId,
      createdAt: new Date()
    }
  ])
  
  console.log('✅ Тестовые данные добавлены!')
  process.exit(0)
}

seed().catch(console.error)