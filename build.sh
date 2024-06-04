#!/bin/bash

# Configurar la codificación UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# Instalar dependencias
npm install

# Iniciar el servidor en segundo plano
nohup node src/app.js > output.log 2>&1 &

# Confirmar que el servidor está corriendo
echo "Server started successfully"