import { connectToDatabase } from "@/lib/mongo";

export async function GET(request) {
    try {


        const params = request.nextUrl.searchParams
        const specialization = params.get('specialization')
        if (!specialization) return Response.json({ error: 'Нужно передать specialization' }, { status: 400 });

        const { db } = await connectToDatabase();
        const skills = await db.collection('skills').find({ specialization: { $regex: specialization, $options: 'i' } }).toArray();

        const grouped = {};
        skills.forEach(s => (grouped[s.category] = grouped[s.category] || []).push(s.name));

        const categories = Object.keys(grouped);

        const nodes = categories.map((category, i) => ({
            id: String(i + 1),
            position: { x: i * 350, y: 0 },
            data: { label: category + ':', items: grouped[category] },
            type: 'skills_node',
            sourcePosition: 'right',
            targetPosition: 'left',
        }));

        const edges = categories.slice(1).map((_, i) => ({
            id: `e${i + 1}-${i + 2}`,
            source: String(i + 1),
            target: String(i + 2),
        }));
        console.log(Response.json({ nodes, edges }))
        return Response.json({ nodes, edges });
    } catch (error) {
        console.log(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
