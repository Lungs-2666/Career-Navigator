import { connectToDatabase } from "@/lib/mongo";

export async function GET(params) {
  let { db } = await connectToDatabase()
  let items = await db.collection('vacancies').find({}).toArray()
  return Response.json(items)

}