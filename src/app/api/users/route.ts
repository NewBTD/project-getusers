import { NextResponse } from 'next/server';
import { getUsers, createUser } from "../../lib/db"

export async function GET() {
  const users = getUsers();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newUser = createUser(body);
  return NextResponse.json(newUser, { status: 201 });
}

