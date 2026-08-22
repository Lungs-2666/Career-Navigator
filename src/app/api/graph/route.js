// app/api/graph/route.js
import { connectToDatabase } from "@/lib/mongo";
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

function buildGraphFromSkills(skills) {
  const grouped = {};

  // ну тут я группирую скиллы по категориям
  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill.name);
  }

  const categories = Object.keys(grouped).sort();
  const nodes = [];

  // строю ноды для графа, расставляю их по горизонтали
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const x = i * 350;

    nodes.push({
      id: String(i + 1),
      position: { x, y: 0 },
      data: {
        label: category + ':',
        items: grouped[category].sort(),
        label_color: '#3b82f6' // просто синий цвет для всех
      },
      type: 'skills_node',
      sourcePosition: 'right',
      targetPosition: 'left',
    });
  }

  // делаю связи между нодами
  const edges = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    edges.push({
      id: `e${i + 1}-${i + 2}`,
      source: String(i + 1),
      target: String(i + 2),
    });
  }

  return { nodes, edges };
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const specialization = searchParams.get('specialization');
    const vacancyId = searchParams.get('vacancyId');

    const { db } = await connectToDatabase();

    let skills = [];

    // если есть vacancyId - ищем по нему
    if (vacancyId) {
      const vacancy = await db.collection('vacancies').findOne({
        _id: new ObjectId(vacancyId)
      });

      if (!vacancy) {
        return NextResponse.json(
          { error: 'Вакансия не найдена' },
          { status: 404 }
        );
      }

      skills = await db.collection('skills').find({
        name: { $in: vacancy.skillsForGraph }
      }).toArray();

    } else if (specialization) {
      // иначе если есть specialization - берем все скиллы для этой спецы
      skills = await db.collection('skills').find({
        specialization: specialization
      }).toArray();
    } else {
      // если ничего нет - ругаемся
      return NextResponse.json(
        { error: 'Нужно передать specialization или vacancyId' },
        { status: 400 }
      );
    }

    if (skills.length === 0) {
      return NextResponse.json({
        nodes: [],
        edges: [],
        message: 'Скиллы не найдены'
      });
    }

    const graph = buildGraphFromSkills(skills);
    return NextResponse.json(graph);

  } catch (error) {
    console.log('Ошибка:', error);
    return NextResponse.json(
      { error: 'Что-то пошло не так' },
      { status: 500 }
    );
  }
}