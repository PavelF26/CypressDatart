FROM node:latest

COPY package*.json ./

RUN npm install

COPY . .

ENV URL="http://localhost:3000"

CMD ["npm", "run", "cy:run"]

VOLUME [ "/cypress/dockerImg" ]

