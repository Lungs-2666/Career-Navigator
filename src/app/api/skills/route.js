import { connectToDatabase } from "@/lib/mongo";
export async function GET() {
  let { db } = await connectToDatabase()

  let vacs = await db.collection('vacancies').find({}).toArray()
  let counts = {}

  for (let vac of vacs) {
    if (!vac.skills) continue
    for (let skill of vac.skills) {
      counts[skill] = (counts[skill] || 0) + 1
    }
  }
  let result = []
  for (let name in counts) {
    result.push({ name, count: counts[name] })
  }
  result.sort((a, b) => b.count - a.count)

  return Response.json(result);
}