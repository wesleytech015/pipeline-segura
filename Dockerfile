FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install -g npm@latest
RUN npm ci --omit=dev

COPY src ./src

EXPOSE 3000

USER node
CMD ["npm", "start"]
