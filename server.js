const express = require('express');
const app = express();

// Middleware to parse query parameters
app.use(express.json());

// Addition Endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input parameters" });
    }
    res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input parameters" });
    }
    res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input parameters" });
    }
    res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input parameters" });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }
    res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const winston = require('winston');

// Create Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// Middleware for logging requests
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url} - IP: ${req.ip}`);
    next();
});

// Modify existing endpoints to log operations
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error("Invalid input parameters for addition");
        return res.status(400).json({ error: "Invalid input parameters" });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    logger.info(`Addition operation: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});
