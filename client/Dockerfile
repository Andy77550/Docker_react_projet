FROM node:14-slim

# Créer un répertoire d'applications

WORKDIR /usr/src/app

# Installer les dépendances de l'application

COPY ./package.json ./
COPY ./yarn.lock ./

# Construction du code pour la production

RUN yarn install


# Regroupe la source de l'application

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]