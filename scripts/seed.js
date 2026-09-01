import { connectToDatabase } from "../src/lib/mongo.js";
import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fileVacancies = join(__dirname, '../data/vacancies.json')
const fileSkills = join(__dirname, '../data/skills.json')


async function main() {
  console.log('start')

  console.log('читаем файл vacancies')
  let rawVac = fs.readFileSync(fileVacancies, 'utf8')
  console.log(' файл прочитан')

  console.log("парсим файл vacancies")
  let listVac = JSON.parse(rawVac)


  console.log('читаем файл skills')
  let rawSkills = fs.readFileSync(fileSkills, 'utf8')
  console.log(' файл прочитан')

  console.log("парсим файл skills")
  let listSkll = JSON.parse(rawSkills)

  console.log("подключение к бд")
  let { db, client } = await connectToDatabase();

  console.log('начало записи vacancies')
  await db.collection('vacancies').deleteMany({})
  await db.collection('vacancies').insertMany(listVac)
  console.log('Добавленно записей vacancies:', listVac.length)

  console.log('начало записи skills')
  await db.collection('skills').deleteMany({})
  await db.collection('skills').insertMany(listSkll)
  console.log('Добавленно записей skills:', listSkll.length)

  await client.close()
  process.exit(0)



}
main().catch(err => {
  console.log(err)
  process.exit(1)
})