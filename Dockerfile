FROM node:lts-alpine

WORKDIR /usr/src/high-five/frontend

COPY package*.json ./

RUN npm install --production --verbose

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
