import createApp from './app.js';
import { config } from './config.js';

async function startServer() {
    const app = await createApp();
    app.listen(config.port, () => {
        console.log(`Servidor escuchando en http://localhost:${config.port}`);
    });
}

startServer();

// Desde Backend-MiniTFG/ hacer node src/index.js (revisar notas.txt)
// Rutas

// Obtencion de ejercicios en base a bodyPart
// http://localhost:3000/exercises/pecho

// Obtencion de rutinas en base a dia
// http://localhost:3000/daily_routine/Martes

// Creacion de rutina
/*curl -X POST http://localhost:3000/daily_routine \
     -H "Content-Type: application/json" \
     -d '{
           "day": "Martes",
           "focus": "Full Body + Core & Cardio",
           "description": "Sesión con 6 ejercicios principales, 2 ejercicios de core y 1 de cardio.",
           "exercises": [
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 4,
               "repetitions": 8,
               "restTime": 90
             },
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 4,
               "repetitions": 8,
               "restTime": 90
             },
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 4,
               "repetitions": 10,
               "restTime": 90
             },
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 3,
               "repetitions": 10,
               "restTime": 90
             },
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 3,
               "repetitions": 12,
               "restTime": 75
             },
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 3,
               "repetitions": 12,
               "restTime": 75
             },
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 3,
               "repetitions": 15,
               "restTime": 60
             },
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 3,
               "repetitions": 15,
               "restTime": 60
             },
             {
               "exerciseId": " (id de ejercicio) ",
               "sets": 1,
               "repetitions": 10,
               "restTime": 0,
               "note": "Duración en minutos a intensidad suave"
             }
           ]
         }'*/

// Eliminacion de rutina
// curl -X DELETE http://localhost:3000/daily_routine/ (id de rutina)

// Obtencion de comentarios en base a username
// http://localhost:3000/comments/ (nickname)

// Creacion de comentario
/*curl -X POST http://localhost:3000/comments \
     -H "Content-Type: application/json" \
     -d '{
           "routineId": " (id de rutina)",
           "username": "usuario_ejemplo",
           "comment": "Este es un comentario asociado a la rutina.",
           "date": "2023-10-05T12:34:56Z"
         }' */

// Eliminacion de comentario en base a id
// curl -X DELETE http://localhost:3000/comments/ (id de comentario)