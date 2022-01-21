FROM node as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm install react
RUN npm install
CMD ["npm", "start"]