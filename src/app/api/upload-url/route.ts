import { NextRequest, NextResponse } from 'next/server';

const MAX_BODY_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(req: NextRequest) {
  // --- Size check: reject before parsing body ---
  const contentLength = parseInt(
    req.headers.get('content-length') || '0',
    10
  );
  if (contentLength > MAX_BODY_SIZE) {
    return NextResponse.json(
      { error: 'File too large. Maximum upload size is 10MB.' },
      { status: 413 }
    );
  }

  const { fileName, contentType } = await req.json();

  // In production: generate S3 presigned URL via @aws-sdk/s3-request-presigner
  // const url = await getSignedUrl(s3, new PutObjectCommand({
  //   Bucket: process.env.S3_BUCKET!,
  //   Key: `cvs/${Date.now()}-${fileName}`,
  //   ContentType: contentType,
  // }), { expiresIn: 3600 });

  const key = `cvs/${Date.now()}-${fileName}`;

  return NextResponse.json({
    url: `/api/mock-upload?key=${encodeURIComponent(key)}`,
    key,
  });
}
