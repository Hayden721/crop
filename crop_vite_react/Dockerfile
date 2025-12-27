FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM alpine

WORKDIR /dist
COPY --from=builder /app/dist .

CMD ["sh", "-c", "echo 'React build complete'"]
