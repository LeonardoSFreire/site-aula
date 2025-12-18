# Estágio de Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Gerar build de produção
RUN npm run build

# Estágio de Produção
FROM nginx:alpine

# Copiar arquivos estáticos gerados no build anterior para o diretório do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
