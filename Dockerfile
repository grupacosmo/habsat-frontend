FROM node:16.14.0

WORKDIR /app

ENTRYPOINT ["bash", "-c", "npm install && npm start"]