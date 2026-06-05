import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { applications: true } } },
  });

  // Transform to include applications as a flat number
  const result = jobs.map(({ _count, ...job }) => ({
    ...job,
    applications: _count.applications,
  }));

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const job = await prisma.job.create({
      data: {
        title: body.title || '',
        company: body.company || '',
        location: body.location || '',
        type: body.type || 'Full-time',
        sector: body.sector || 'Practice',
        salary: body.salary || '',
        description: body.description || '',
        slug: body.slug || `job-${Date.now()}`,
        status: body.status || 'Draft',
      },
      include: { _count: { select: { applications: true } } },
    });
    const { _count, ...rest } = job;
    revalidatePath('/jobs');
    return NextResponse.json({ ...rest, applications: _count.applications }, { status: 201 });
  } catch (err: any) {
    // Slug uniqueness violation or other DB error
    return NextResponse.json({ error: err.message || 'Creation failed' }, { status: 500 });
  }
}
