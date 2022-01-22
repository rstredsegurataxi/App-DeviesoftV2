FROM node as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN yarn install
CMD ["yarn", "start"]