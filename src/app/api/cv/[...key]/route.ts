import { NextRequest, NextResponse } from 'next/server';

// In production: generate a presigned S3 download URL or stream the file
export async function GET(
  _req: NextRequest,
  { params }: { params: { key: string[] } }
) {
  const key = params.key?.join('/') || '';

  // Mock: redirect would go to S3 presigned URL in production
  // const url = await getSignedUrl(s3, new GetObjectCommand({
  //   Bucket: process.env.S3_BUCKET!,
  //   Key: key,
  // }), { expiresIn: 3600 });

  return NextResponse.json({
    key,
    downloadUrl: `https://s3.${process.env.AWS_REGION || 'eu-west-2'}.amazonaws.com/${process.env.S3_BUCKET || 'bc-recruitment-cvs'}/${key}`,
    message: 'In production, this redirects to a presigned S3 download URL valid for 1 hour.',
  });
}
