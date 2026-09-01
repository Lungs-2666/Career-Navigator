import { connectToDatabase } from "@/lib/mongo";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    try {
        let { db } = await connectToDatabase();
        const { id } = await params;
        console.log(id, 'id')
        if (!id) {
            return Response.json({ error: 'id не указан ' }, { status: 404 })
        }

        console.log('проверка в базе по id')
        let items = await db.collection('vacancies').findOne({ _id: new ObjectId(id) });

        console.log('найденно', items)
    
        return Response.json(items)
    } catch (error) {
        console.log(error);
        return Response.json(
            { error: error.massage },
            { status: 500 }
        )
    }


}