import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  const books = await prisma.book.findMany()
  return NextResponse.json(books)
}

export async function POST(request: Request) {
  const body = await request.json()
  const book = await prisma.book.create({
    data: {
      title: body.title,
      author: body.author,
    },
  })
  return NextResponse.json(book)
}

