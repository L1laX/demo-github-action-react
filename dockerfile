FROM oven/bun:1.2.22 AS base

WORKDIR /app
FROM base AS builder

COPY package.json bun.lock ./
RUN bun i
COPY . .

# -> dist
RUN bun run build

FROM joseluisq/static-web-server:2
COPY --from=builder /app/dist /dist
CMD ["--port", "3000", "--root", "dist"]