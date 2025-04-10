// server.js - Updated for SIT737 4.2C Task
const express = require('express');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'server.log' })
    ]
});

const app = express();
const PORT = 3111;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/calculator.html');
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.on('finish', () => {
        logger.info({
            ip: req.ip,
            method: req.method,
            url: req.originalUrl,
            headers: req.headers,
            responseStatus: res.statusCode,
            result: res.locals.result || 'No result'
        });
    });
    next();
});

// Enhanced Calculator logic for SIT737-4.2C
app.get('/calculate', (req, res) => {
    const { num1, num2, operation } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    if (isNaN(n1) || (operation !== 'sqrt' && isNaN(n2))) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }

    switch (operation) {
        case 'add':
            result = n1 + n2;
            break;
        case 'subtract':
            result = n1 - n2;
            break;
        case 'multiply':
            result = n1 * n2;
            break;
        case 'divide':
            if (n2 === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
            result = n1 / n2;
            break;
        case 'modulo':
            result = n1 % n2;
            break;
        case 'exponent':
            result = Math.pow(n1, n2);
            break;
        case 'sqrt':
            if (n1 < 0) return res.status(400).json({ error: 'Cannot calculate square root of negative number' });
            result = Math.sqrt(n1);
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    res.locals.result = result;
    res.json({ num1: n1, num2: isNaN(n2) ? null : n2, operation, result });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${3111}`);
});
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});