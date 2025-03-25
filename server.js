const express = require('express');
const winston = require('winston');

const app = express();
app.use(express.json());

// Winston Logger Configuration
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

// Middleware for Logging Requests
app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url} from IP: ${req.ip}`);
    next();
});

// Function to Validate Inputs
const validateInputs = (num1, num2) => {
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return { error: "Invalid input parameters" };
    }
    return null;
};

// Arithmetic Operations Endpoints
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateInputs(num1, num2);
    if (validationError) {
        logger.error("Addition failed due to invalid inputs");
        return res.status(400).json(validationError);
    }
    const result = parseFloat(num1) + parseFloat(num2);
    logger.info(`Addition: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateInputs(num1, num2);
    if (validationError) {
        logger.error("Subtraction failed due to invalid inputs");
        return res.status(400).json(validationError);
    }
    const result = parseFloat(num1) - parseFloat(num2);
    logger.info(`Subtraction: ${num1} - ${num2} = ${result}`);
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateInputs(num1, num2);
    if (validationError) {
        logger.error("Multiplication failed due to invalid inputs");
        return res.status(400).json(validationError);
    }
    const result = parseFloat(num1) * parseFloat(num2);
    logger.info(`Multiplication: ${num1} * ${num2} = ${result}`);
    res.json({ result });
});

app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateInputs(num1, num2);
    if (validationError) {
        logger.error("Division failed due to invalid inputs");
        return res.status(400).json(validationError);
    }
    if (parseFloat(num2) === 0) {
        logger.error("Division by zero attempted");
        return res.status(400).json({ error: "Cannot divide by zero" });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    logger.info(`Division: ${num1} / ${num2} = ${result}`);
    res.json({ result });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
