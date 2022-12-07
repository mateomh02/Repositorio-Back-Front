# Repositorio-Back-Front
•	Para el despliegue de la aplicación web se requiere lo siguiente:
•	Instalar wsl ( kernel de Linux en windows)
•	Instalación del contenedor o Docker
•	Se crea el archivo Docker file con los siguientes archivos básicos:
  o	FROM node:16
  o	WORKDIR /app
  o	COPY package*.json ./
  o	RUN npm install
  o	COPY . .
  o	CMD ["npm", "start"]
 •	Se ejecutan los siguientes comandos para la creación del entorno en el contenedor:
  o	docker build –t
 •	Se debe incluir el archivo .dockerignore, para excluir las carpeta
 El front-end se encuentra en el siguiente repositorio https://github.com/mateomh02/Spirnt-Ciclo-4
 El backend se encuentra en el siguiente respositorio https://github.com/mateomh02/Sprint-Back-End/tree/main
