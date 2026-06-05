# Multi-stage Docker build for Next.js + Prisma
FROM node:22-slim AS base
WORKDIR /app

# Prisma engine requirements
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# Install Prisma CLI for migration support
RUN npm install -g prisma@^5.14.0

# Dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Prisma client generation
FROM deps AS prisma
COPY prisma ./prisma
RUN npx prisma generate

# Build
FROM prisma AS build
COPY . .
RUN npx next build

# Production
FROM base AS runner
ENV NODE_ENV=production

# Copy standalone output (includes .next/static, server.js, node_modules)
COPY --from=build /app/.next/standalone ./

# Copy public assets into standalone's public dir
COPY --from=build /app/public ./public

# Copy Prisma for migrations at startup
COPY --from=build /app/prisma/migrations ./prisma/migrations
COPY --from=build /app/prisma/schema.prisma ./prisma/schema.prisma
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/node_modules/@prisma ./node_modules/@prisma

# EFS mount point for SQLite
RUN mkdir -p /data

EXPOSE 3000

# Run migrations then start Next.js
CMD sh -c "npx prisma migrate deploy --schema=prisma/schema.prisma && node server.js"
