import { connectToDatabase } from "@/lib/mongo";
export async function GET() {
  let { db } = await connectToDatabase()

  let skills = await db.collection('skills').find({}).toArray()
  return Response.json(skills);
}