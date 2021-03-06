FROM node:current-alpine3.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
