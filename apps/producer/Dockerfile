FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl
RUN corepack enable

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build:producer

CMD ["node", "dist/apps/producer/src/main.js"]