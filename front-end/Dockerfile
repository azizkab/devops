# Étape 1 : Utiliser une image Node.js pour construire l'application
FROM node:16 as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour servir les fichiers
FROM nginx:alpine

# Copier les fichiers du dossier build vers le dossier Nginx par défaut
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour le serveur Nginx
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
