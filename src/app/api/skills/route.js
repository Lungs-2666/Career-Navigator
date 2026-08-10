import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongo'

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const skills = await db.collection('skills').find({}).toArray()
    return NextResponse.json(skills)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { db } = await connectToDatabase()
    
    const result = await db.collection('skills').insertOne({
      name: body.name,
      category: body.category || '',
      demand: body.demand || 0,
      createdAt: new Date()
    })
    
    return NextResponse.json({ 
      success: true, 
      id: result.insertedId 
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}