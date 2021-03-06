FROM 17-alpine3.14

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

# CMD ["ls"]
CMD [ "node", "app.js" ]