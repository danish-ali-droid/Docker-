FROM node:20-slim AS Build_stage_1
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN echo "Stage 1 is ended"

FROM nginx:alpine
COPY --from=Build_stage_1 /app /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]


