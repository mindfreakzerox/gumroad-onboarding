FROM node:18-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm ci --production
COPY server ./server
COPY public ./public
COPY playbooks ./playbooks
EXPOSE 3000
CMD ["node","server/index.js"]
