# syntax=docker/dockerfile:1

# Build stage
FROM node:slim20-alpine AS builder

RUN apk add --no-cache \
    corepack && \
    corepack enable && \
    corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

COPY package.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

# Production stage
FROM nginx:alpine

# Copy built files from builder stage to nginx html directory
COPY --from=builder /usr/src/app/dist/modern-angular-app/browser /usr/share/nginx/html

# Create a simple nginx config that handles SPA routing
RUN echo $'\
server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
