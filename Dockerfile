FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY public ./public
COPY server ./server
COPY playbooks ./playbooks
COPY manuals ./manuals
EXPOSE 3000
CMD ["node","server/index.js"]
