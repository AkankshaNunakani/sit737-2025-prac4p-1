This task is a RESTful API microservice that performs basic arithmetic operations (Addition, Subtraction, Multiplication, and Division). The application is built using Node.js and Express.js, with Winston for logging

Project Structure
• Create a project folder 
• Initialize a Node.js project: npm init -y 
• Install Express.js: npm install express

sit737-2025-prac4p/

│── logs/  # Directory for log files

│   ├── combined.log        # Stores all API request logs

│   ├── error.log           # Stores only error logs

│── package-lock.json           

│── package.json            # Project dependencies & scripts

│── server.js               # Main Express server file

Start the server
node server.js
http://localhost:3000

Winston Logger Setup
- Logging library for tracking operations and errors
  
API Endpoint Implementation:
The microservice provides the following endpoints, which accept query parameters (num1 and num2)
Performs airthematic operations

Logging System

-combined log:
Stores all API requests

-error log:
Stores only errors

Setting Up Git and Pushing to GitHub 

git init

git add .

git commit -m "Initial commit"

git remote add origin https://github.com/suryav-04/sit737-2025-prac4p.git

git branch -M main

git push -u origin main


This calculator microservice is built using Node.js, Express.js, and Winston for logging. It provides reliable logging, API validation, and structured code for scalability


Credit Task explanations 

This document provides a comprehensive guide on implementing additional arithmetic operations in a calculator microservice using Node.js and Express.js. The extended functionality includes exponentiation, square root, and modulo operations. It also details the error handling, logging, and GitHub submission process.


1. Exponentiation (/power Endpoint)

2. Square Root (/sqrt Endpoint)

3. Modulo (/modulo Endpoint)


Pushing the Changes to GitHub

git add .

git commit -m "Updated server.js with additional arithmetic operations"

git push origin main
