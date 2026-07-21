FROM node AS Builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=Builder /app/dist ./dist

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "npm", "start" ]

