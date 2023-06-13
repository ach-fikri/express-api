FROM node:18-alpine

ENV PORT=8080
ENV DB_HOST=jdbc:mysql://host.docker.internal:3306/....
ENV DB_USERNAME=root
ENV DB_PASSWORD=Admin123
ENV DB_NAME=express_mysql

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "run", "start-prod" ]
