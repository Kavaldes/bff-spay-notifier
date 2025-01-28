# API Node Generic

Brebe descripcion de la aplicacion en Node

## Tecnología
- Nodejs
- Express
- Jest

## Instalación
1. Crear .env.local en path ./src/resources/

2. Generacion de base de datos 
Agregar en caso de que se integren

3. Agregar las siguientes variables al archivo ./src/resources/.env.local
```sh
NODE_ENV=local
CORS=/localhost/
PORT=8080
LOG_TYPE=info
```

3. Compilar el proyecto:
```bash
npm install
```

4. Ejecución de test unitarios:
```bash
npm run test:ci
```

4. Correr la aplicacion:
```bash
npm run start:local
```


### Endpoints

1. /metrics --> http://localhost:{{port}}/ping

## Otros Links:

- [Explicacion de estructura del proyecto](README_APP_INFO.md)