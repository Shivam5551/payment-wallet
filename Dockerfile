FROM debian:bullseye

RUN apt-get update && \
    apt-get install -y curl git && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Enable Corepack and set pnpm version
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

WORKDIR /app

COPY . .

RUN pnpm install

EXPOSE 3000
EXPOSE 4000

# Fix the command syntax
CMD ["sh", "-c", "pnpm run prisma && pnpm run dev"]