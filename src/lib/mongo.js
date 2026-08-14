import { MongoClient } from 'mongodb'

const uri = process.env.DATABASE_URL || 'mongodb://localhost:27017'
const dbName = process.env.DB_NAME || 'skillgraph'

let client
let db

export async function connectToDatabase() {
  if (db && client) {
    return { db, client }
  }

  try {
    client = new MongoClient(uri)
    await client.connect()
    db = client.db(dbName)
    console.log('✅ Подключено к MongoDB')
    return { db, client }
  } catch (error) {
    console.error('❌ Ошибка подключения к MongoDB:', error)
    throw error
  }
}