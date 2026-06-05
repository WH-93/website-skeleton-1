import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const applications = await prisma.application.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      candidate: true,
      job: { select: { title: true, company: true } },
    },
  });

  const result = applications.map(app => ({
    id: app.id,
    firstName: app.candidate.firstName,
    lastName: app.candidate.lastName,
    email: app.candidate.email,
    phone: app.candidate.phone,
    cvKey: app.candidate.cvKey,
    cvName: app.candidate.cvName,
    jobTitle: app.job.title,
    jobCompany: app.job.company,
    status: app.status,
    createdAt: app.createdAt.toISOString(),
  }));

  return NextResponse.json(result);
}
