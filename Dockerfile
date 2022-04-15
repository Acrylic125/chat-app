FROM node:12

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

# CMD ["ls"]
CMD [ "node", "app.js" ]