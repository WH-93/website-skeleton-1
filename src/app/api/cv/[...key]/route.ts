import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: { key: string[] } }
) {
  const key = params.key?.join('/') || '';

  // Find candidate by cvKey
  const candidate = await prisma.candidate.findFirst({
    where: { cvKey: key },
  });

  if (!candidate || !candidate.cvData) {
    return NextResponse.json({ error: 'CV not found' }, { status: 404 });
  }

  // Decode base64 and serve as PDF download
  const buffer = Buffer.from(candidate.cvData, 'base64');
  const filename = candidate.cvName || 'cv.pdf';

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${filename}"`,
      'Content-Length': String(buffer.length),
    },
  });
}
