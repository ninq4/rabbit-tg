FROM node:20-alpine

WORKDIR /app
RUN apk add --no-cache curl
RUN corepack enable

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build:consumer

CMD ["node", "dist/apps/consumer/src/main.js"]