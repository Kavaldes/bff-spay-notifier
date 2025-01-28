# Proyecto Node.js con Express

Este proyecto sigue una estructura modular orientada a la separación de responsabilidades y escalabilidad. La organización del código se basa en la clara distinción entre las capas de aplicación (API), dominio, infraestructura y configuración.

## Estructura del Proyecto
```text
src/
│
├── main/
│   ├── api/
│   │   ├── common/
│   │   ├── funcionalidad/
│   │   │   ├── handler/
│   │   │   ├── mapper/
│   │   │   ├── validations/
│   │   └── (otras funcionalidades...)
│   │
│   ├── domain/
│   │   ├── models/
│   │   ├── services/
│   │   ├── repositories/
│   │   │   ├── entity/
│   │
│   ├── infrastructure/
│   │   ├── databases/
│   │   ├── restclient/
│   │
│   ├── settings/
│   │   ├── errors/
│   │   ├── schemas/
│
├── resources/
└── test/
```

## Descripción de Carpetas
- api/: Contiene los componentes directamente relacionados con la capa de presentación y exposición de la API REST.

   - common/: Funcionalidades y componentes comunes que son utilizados por distintas funcionalidades de la aplicación.

   - funcionalidad/: Para cada funcionalidad específica de la API, esta carpeta contiene:

        - handler/: Controladores que gestionan la lógica de solicitud y respuesta para cada endpoint.

        - mapper/: Mapas de datos para transformar objetos entre diferentes capas.

        - validations/: Lógica de validación de datos de entrada específicos para la funcionalidad.

- domain/: Contiene la lógica central del dominio de negocio.

   - models/: Modelos y entidades del dominio.

   - services/: Lógica de negocio que orquesta operaciones complejas.

   - repositories/: Interfaz con la capa de persistencia de datos.

        - entity/: Definición de entidades específicas de la base de datos.
- infrastructure/: Gestión de recursos externos y servicios de infraestructura.

   - databases/: Configuración y conexión a bases de datos.

   - restclient/: Clientes REST para consumir APIs externas.

- settings/: Configuración general y manejo de errores.

   - errors/: Clases de error personalizadas.

   - schemas/: Esquemas de configuración para validaciones globales.

- resources/: Recursos adicionales como archivos de configuración JSON, scripts, etc.

- test/: Ubicación de las pruebas automatizadas del proyecto.

---
## Estrategia de Organización
- La estructura modular está pensada para escalar de forma ordenada, con cada funcionalidad separada y componible. La idea es promover la reutilización de componentes y mantener una alta cohesión dentro de cada módulo y baja acoplamiento entre ellos.

---
## Ejecución de Tests

- El proyecto está configurado con Jest para ejecutar pruebas unitarias y de integración. Las pruebas están ubicadas en la carpeta test/ y siguen la misma estructura modular del código principal.

