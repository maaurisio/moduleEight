# 1. Usamos una imagen ligera de Node.js (Alpine Linux)
FROM node:20-alpine

# 2. Creamos y definimos el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos solo los archivos de dependencias primero
# Esto es un truco de optimización: si no cambias tus librerías, 
# Docker saltará este paso en la próxima construcción.
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install

# 5. Copiamos el resto del código de tu aplicación
COPY . .

# 6. Exponemos el puerto en el que corre Express (ejemplo: 3000)
EXPOSE 3000

# 7. Comando para arrancar la aplicación
CMD ["npm", "start"]
