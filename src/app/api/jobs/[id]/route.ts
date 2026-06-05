import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();

  try {
    const job = await prisma.job.update({
      where: { id },
      data: {
        title: body.title,
        company: body.company,
        location: body.location,
        type: body.type,
        sector: body.sector,
        salary: body.salary,
        status: body.status,
        description: body.description,
      },
    });
    revalidatePath('/jobs');
    revalidatePath(`/jobs/${job.slug}`);
    return NextResponse.json(job);
  } catch {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.job.delete({ where: { id } });
    revalidatePath('/jobs');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }
}
