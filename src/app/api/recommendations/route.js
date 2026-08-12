import { connectToDatabase } from "@/lib/mongo";

export async function GET(req) {
  let { searchParams } = new URL(req.url)
  let skill = searchParams.get('skill')

  let { db } = await connectToDatabase()

  let filter = skill ? { skills: skill } : {}
  let items = await db.collection('vacancies').find(filter).limit(10).toArray()

  return Response.json(items)
}