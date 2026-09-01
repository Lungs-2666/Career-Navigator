import { connectToDatabase } from "@/lib/mongo";

export async function GET(request) {
  let { db } = await connectToDatabase()
  const params = request.nextUrl.searchParams

  const title = params.get('title')
  console.log(title, "title")
  const filter = {}

  if (title) {
    filter.title = { $regex: title, $options: 'i' }
    console.log('фильтр добавлен:', filter)
  } else {
    console.log('фильтр пустой', filter)
  }


  let items = await db.collection('vacancies').find(filter).toArray()
  console.log(items)
  return Response.json(items)

}