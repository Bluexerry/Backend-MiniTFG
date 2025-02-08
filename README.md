# Descripción Extendida del Proyecto

Este proyecto es una aplicación de backend para la gestión de entrenamientos y rutinas, desarrollada con Node.js, Express y MongoDB. Su objetivo es ofrecer una API RESTful que permita:

- **Consultar ejercicios filtrados** (por parte del cuerpo, dificultad, equipo, etc.)
- **Crear, consultar y eliminar rutinas diarias**, en las que se definen entradas (día, focus, descripción) y un listado de ejercicios con parámetros específicos (series, repeticiones, descanso).
- **Gestionar comentarios** asociados a rutinas, con funcionalidades CRUD y asignación automatizada de fechas de creación.

## Arquitectura y Organización

La aplicación se centra en la modularidad y separación de responsabilidades, de modo que cada parte del código tiene una función clara:

### Controladores (Controllers)

Reciben y procesan las solicitudes HTTP, controlando la lógica de negocio (por ejemplo, validar datos, invocar servicios, gestionar respuestas y errores).

### Rutas (Routes)

Definen los endpoints de la API agrupados por recurso (ejercicios, rutinas diarias, comentarios). Las rutas asignan cada endpoint a su controlador correspondiente.

### Servicios (Services)

Encapsulan la lógica de acceso a datos. Aquí se realizan las consultas, inserciones, actualizaciones y eliminaciones en la base de datos MongoDB, utilizando el driver oficial.

### Modelos (Models)

Representan la estructura de los documentos en la base de datos. Por ejemplo, se definen los esquemas para rutinas diarias, comentarios y ejercicios.
Asimismo, los modelos incluyen validaciones básicas (por ejemplo, campos obligatorios) y conversiones de datos cuando fuese necesario.

### Configuración y Variables de Entorno

La configuración (como el puerto de escucha, el URI de MongoDB y otros parámetros) se centraliza en un archivo de configuración (`config.js`) que extrae sus valores de un archivo `.env`. Esto permite tener entornos flexibles (desarrollo, producción, etc.) sin modificar el código fuente.

### Loaders y Utilidades

Los loaders son módulos que inician y configuran componentes esenciales (por ejemplo, la conexión a la base de datos y la carga de Express con middleware personalizado).
Además, se cuenta con utilidades como un **logger** (basado en Winston) para registrar logs de la aplicación, lo que ayuda a la monitorización y la depuración.

### Manejo de Errores

Se ha implementado un middleware global en Express para capturar los errores y devolver respuestas adecuadas, registrando además todos los detalles importantes mediante el logger.

---

## Estructura del Proyecto

A continuación se muestra un ejemplo de estructura del proyecto en forma de árbol, donde se visualizan las carpetas y algunos archivos clave:

```plaintext
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── ESLint.config.mjs
├── app.log
├── src
│   ├── index.js                 // Punto de entrada de la aplicación
│   ├── config.js                 // Configuración central (puerto, URI, etc.)
│   ├── loaders
│   │   ├── express.js           // Configuración de Express (middlewares, rutas, etc.)
│   │   └── mongoDB.js           // Conexión a MongoDB
│   ├── models
│   │   ├── dailyRoutineModel.js // Modelo y validación para rutinas diarias
│   │   ├── commentModel.js      // Modelo para comentarios
│   │   └── exercisesModel.json  // Definición de esquemas o seed data
│   ├── controllers
│   │   ├── dailyRoutineController.js  // Lógica de negocio para rutinas diarias
│   │   ├── commentController.js       // Controlador de comentarios
│   │   └── exercisesController.js     // Controlador de ejercicios
│   ├── routes
│   │   ├── dailyRoutineRoutes.js  // Endpoints de rutinas diarias
│   │   ├── commentRoutes.js       // Endpoints de comentarios
│   │   └── exercisesRoutes.js     // Endpoints de ejercicios
│   ├── services
│   │   ├── dailyRoutineService.js // Acceso a datos y lógica para rutinas
│   │   ├── commentService.js      // Servicio de comentarios
│   │   └── exerciseService.js     // Servicio para gestionar ejercicios
│   ├── utils
│   │   └── logger.js             // Configuración del logger (Winston)
├── db
│   ├── esquema_de_ejercicios.json           // Definición del esquema para ejercicios
│   ├── esquema_de_ejercicios_diarios.json   // Esquema para rutinas diarias
│   └── esquema_de_comentarios.json          // Esquema para comentarios
└── README.md
```

---

## Otros Aspectos Relevantes

### Controles de Validación y Conversión

Los modelos realizan validaciones de los datos entrantes y, en algunos casos, convierten propiedades (por ejemplo, intentar convertir un ID a ObjectId si es válido). Se ha pensado especialmente en los puntos de error, como el manejo del formato del `exerciseId` para evitar problemas de conversión.

### Requests y Responses

Los endpoints permiten el uso de query parameters para filtrar resultados (por ejemplo, filtrar rutinas por `day` o ejercicios por `bodyPart`). Además, el manejo de peticiones POST permite estructurar entradas complejas que contienen arrays de subdocumentos (ejercicios y sus detalles).

### Manejo de Logs y Monitorización

El logger se utiliza tanto en entorno de desarrollo como en producción para registrar eventos, peticiones y errores. Esto facilita la trazabilidad y la futura integración con sistemas de monitoreo o alertas (como Prometheus o Grafana).

### Escalabilidad y Mantenimiento

Gracias a la división modular en servicios y controladores, resulta fácil extender la aplicación añadiendo nuevas funcionalidades, como autenticación de usuarios o integración con servicios externos (por ejemplo, para análisis de rendimiento).

### Testing e Integración Continua

Aunque no se muestra en la estructura, el proyecto está preparado para incluir pruebas unitarias e integradas (JUnit con Jest o Mocha). Se pueden agregar tests en una carpeta `tests` para validar endpoints, servicios y lógica de negocio de forma aislada.

---

## Resumen Final

El proyecto es una **robusta API** para gestionar entrenamientos y rutinas, cuidadosamente estructurada en módulos separados para controladores, servicios, modelos, rutas y loaders. Esta arquitectura promueve el mantenimiento y la escalabilidad, facilitando la integración tanto con un frontend especializado (por ejemplo, desarrollado con Vite, React o Vue) como con herramientas de testing y monitorización.

El diagrama en árbol ilustra la organización de los archivos, enfatizando la separación de responsabilidades en el backend, permitiendo un desarrollo ordenado y consistente en equipos.

Esta visión integral y detallada permite comprender mejor el funcionamiento interno del proyecto, sus puntos críticos y las futuras posibilidades de expansión.
