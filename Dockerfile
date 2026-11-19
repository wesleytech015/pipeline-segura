FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install -g npm@latest
RUN npm ci --omit=dev

COPY src ./src

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/health || exit 1

USER node
CMD ["npm", "start"]
