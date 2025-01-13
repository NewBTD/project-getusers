import { NextResponse } from 'next/server';
import { getUser, updateUser, deleteUser } from '../../../lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = getUser(params.id);
  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const updatedUser = updateUser(params.id, body);
  if (updatedUser) {
    return NextResponse.json(updatedUser);
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const deletedUser = deleteUser(params.id);
  if (deletedUser) {
    return NextResponse.json(deletedUser);
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}

