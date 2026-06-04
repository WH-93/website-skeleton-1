import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
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
