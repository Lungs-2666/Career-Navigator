import { connectToDatabase } from "@/lib/mongo";
import { ObjectId } from 'mongodb';


console.log('start')
export async function GET(req, { params }) {
    try {
        const { id } = await params;
        if (!id) return Response.json({ error: 'Нужно передать ID вакансии' }, { status: 400 });

        const { db } = await connectToDatabase();

        const vacancy = await db.collection('vacancies').findOne({ _id: new ObjectId(id) });
        if (!vacancy) return Response.json({ error: 'Вакансия не найдена' }, { status: 404 });

        const skills = await db.collection('skills').find({ name: { $in: vacancy.skillsForGraph || [] } }).toArray();
        if (skills.length === 0) return Response.json({ nodes: [], edges: [], message: 'Скиллы не найдены' });

        const grouped = {};
        skills.forEach(s => (grouped[s.category] = grouped[s.category] || []).push(s.name));
        const categories = Object.keys(grouped).sort();
        const nodes = categories.map((category, i) => ({
            id: String(i + 1),
            position: { x: i * 350, y: 0 },
            data: { label: category + ':', items: grouped[category].sort() },
            type: 'skills_node',
            sourcePosition: 'right',
            targetPosition: 'left',
        }));

        const edges = categories.slice(1).map((_, i) => ({
            id: `e${i + 1}-${i + 2}`,
            source: String(i + 1),
            target: String(i + 2),
        }));
        return Response.json({ nodes, edges });
    } catch (error) {
        console.log(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
