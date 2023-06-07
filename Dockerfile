# Use a imagem base do Node.js
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN npm install

# Exponha a porta do servidor (se necessário)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD  npm run dev

