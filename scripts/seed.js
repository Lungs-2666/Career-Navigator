console.log('0 file loaded')
import { connectToDatabase } from "../src/lib/mongo.js";
import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from "url";

console.log('1 imports loaded')

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const file = join(__dirname, '../data/vacancies.json')
console.log(' 2 создали файл ')


async function main() {
  console.log('start')

  console.log('читаем файл')
  let raw = fs.readFileSync(file, 'utf8')
  console.log(' файл прочитан')

  console.log("парсим файл")
  let list = JSON.parse(raw)
  console.log('json запаршен')
  console.log('подключаемсся к бд')
  let { db, client } = await connectToDatabase();
  console.log('подключились к бд ')
  await db.collection('vacancies').deleteMany({})
  await db.collection('vacancies').insertMany(list)
  console.log('Добавленно записей:', list.length)

  await client.close()
  process.exit(0)



}
main().catch(err => {
  console.log(err)
  process.exit(1)
})