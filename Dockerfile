# Basis-Image für den Build-Prozess
FROM node:18 AS builder
WORKDIR /app

# Package.json und package-lock.json kopieren, um den Cache zu nutzen
COPY package.json package-lock.json ./
RUN npm install

# Den Rest des Codes kopieren
COPY . .

# Nuxt für die Produktion bauen
RUN npm run build

# Produktions-Image
FROM node:18
WORKDIR /app

# Nur die notwendigen Dateien aus dem Build-Container kopieren
COPY --from=builder /app .

# Nur Produktions-Abhängigkeiten installieren
RUN npm install --production

# Externe Ports definieren
EXPOSE 3000

# Startbefehl für Nuxt 3
CMD ["node", ".output/server/index.mjs"]
