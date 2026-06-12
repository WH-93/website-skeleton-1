# BC Financial Search Website

Next.js 14 site for BC Financial Search, with public marketing pages, jobs, applications, and a small admin area.

## Local development

```bash
cd /Users/warrenhayes/Documents/bc-recruitment
npm install
npm run dev
```

Open: http://localhost:3000

## Required environment variables

Create `.env` locally before using admin, jobs, applications, or uploads:

```bash
DATABASE_URL="file:./dev.db"
ADMIN_PASSWORD="change-me"
ADMIN_TOKEN="change-me"
S3_BUCKET="optional-if-using-s3-uploads"
```

Notes:
- `DATABASE_URL` is required by Prisma.
- `ADMIN_PASSWORD` and `ADMIN_TOKEN` protect `/admin`.
- `S3_BUCKET` is only needed for the upload URL endpoint if S3 uploads are enabled.

## Database

```bash
npx prisma generate
npm run db:push
```

Optional database UI:

```bash
npm run db:studio
```

## Build check

```bash
npm run build
```

## Production start

```bash
npm run build
npm run start
```

## Docker launch

The included `Dockerfile` builds the standalone Next.js app and runs Prisma migrations before starting the server.

```bash
docker build -t bc-recruitment .
docker run --rm -p 3000:3000 \
  -e DATABASE_URL="file:/data/prod.db" \
  -e ADMIN_PASSWORD="change-me" \
  -e ADMIN_TOKEN="change-me" \
  -v bc-recruitment-data:/data \
  bc-recruitment
```

## Current branch

Latest brand/mockup work is on:

```bash
git checkout feat/mockup-alignment
```
