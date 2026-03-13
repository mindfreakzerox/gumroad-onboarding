FROM node:18-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm ci --production
COPY server ./server
COPY public ./public
COPY playbooks ./playbooks
COPY manuals ./manuals
EXPOSE 3000
CMD ["node","server/index.js"]
