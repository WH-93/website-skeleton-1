import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { jobId, firstName, lastName, email, phone, cvKey, cvName, cvData } = body;

    if (!jobId || !firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find or create Candidate (upsert by email)
    const candidate = await prisma.candidate.upsert({
      where: { email },
      update: {
        firstName,
        lastName,
        phone: phone || null,
        cvKey: cvKey || null,
        cvName: cvName || null,
        cvData: cvData || null,
      },
      create: {
        firstName,
        lastName,
        email,
        phone: phone || null,
        cvKey: cvKey || null,
        cvName: cvName || null,
        cvData: cvData || null,
      },
    });

    // Create Application (skip if already applied to this job)
    const existing = await prisma.application.findUnique({
      where: { jobId_candidateId: { jobId, candidateId: candidate.id } },
    });

    if (!existing) {
      await prisma.application.create({
        data: { jobId, candidateId: candidate.id },
      });
    }

    return NextResponse.json({ id: candidate.id, status: 'Applied' }, { status: 201 });
  } catch (err: any) {
    console.error('Application submit error:', err);
    return NextResponse.json({ error: err.message || 'Submission failed' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const id = req.url.split('/').pop();
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const updated = await prisma.application.update({
      where: { id },
      data: { status: body.status, notes: body.notes },
    });

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Application not found' }, { status: 404 });
  }
}
