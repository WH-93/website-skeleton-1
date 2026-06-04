import { NextRequest, NextResponse } from 'next/server';

// In production: import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

const MOCK_JOBS = [
  { id: '1', slug: 'audit-senior-manager', title: 'Audit Senior Manager', company: 'Top 20 Accountancy Practice', location: 'London', type: 'Full-time', sector: 'Practice', salary: '£75k-£90k', status: 'Live', description: 'Leading audit engagements...', createdAt: new Date().toISOString() },
  { id: '2', slug: 'corporate-tax-director', title: 'Corporate Tax Director', company: 'Boutique Firm — Mayfair', location: 'London', type: 'Full-time', sector: 'Tax', salary: '£120k-£150k', status: 'Live', description: 'Leading the tax practice...', createdAt: new Date().toISOString() },
];

export async function GET() {
  return NextResponse.json(MOCK_JOBS);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const job = { id: String(MOCK_JOBS.length + 1), ...body, status: 'Live', createdAt: new Date().toISOString() };
  return NextResponse.json(job, { status: 201 });
}
