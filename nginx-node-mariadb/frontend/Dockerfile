FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install 
RUN npm install ci
EXPOSE 3000
CMD ["npm","start"]

