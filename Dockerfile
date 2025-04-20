# frontend/Dockerfile

# Etapa 1: Build Angular
FROM node:23-slim AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Servir Angular con Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
