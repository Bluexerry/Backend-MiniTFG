// Backend-MiniTFG/src/utils/logger.js
import fs from 'fs';
import path from 'path';
import winston from 'winston';

// Asegurarse de que la carpeta "logs" exista
const logDir = path.resolve('logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: path.join(logDir, 'app.log') })
    ]
});

// Mensaje de prueba, se puede quitar después
logger.info('Logger inicializado correctamente.');

export default logger;