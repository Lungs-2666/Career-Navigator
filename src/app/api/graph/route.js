import { connectToDatabase } from "@/lib/mongo";


export async function GET() {
  let { db } = await connectToDatabase()
  let vacs = await db.collection('vacancies').find({}).toArray()

  let nodes = []
  let links = []
  let skills = new Set()

  for (let vac of vacs) {
    if (!vac.skills) continue
    for (let skill of vac.skills) skills.add(skill)
  }

  let map = {}
  let i = 0
  for (let s of skills) {
    nodes.push({ id: 1, label: s })
    map[s] = i
    i++
  }

  let pairs = {}
  for (let vac of vacs) {
    if (!vac.skills || vac.skills.length < 2) continue
    for (let a = 0; a < vac.skills.length; a++) {
      for (let b = a + 1; b < vac.skills.length; b++) {
        let x = vac.skills[a]
        let y = vac.skills[b]
        if (x == y) continue
        let key = x < y ? x + '|' + y : y + '|' + x
        pairs[key] = (pairs[key] || 0) + 1
      }
    }
  }

  for (let key in pairs) {
    let [x, y] = key.split('|')
    if (pairs[key] > 1) {
      links.push({
        source: map[x],
        target: map[y],
        weight: pairs[key]
      })
    }
  }
  return Response.json({ nodes, links  })
}