
StockMaster - Inventory Management System

Introduction

This StockMaster Inventory Management System (IMS) is a comprehensive solution for managing stocks. It is designed to help businesses of all sizes streamline their inventory processes, ensuring efficient operations and minimizing inventory costs.

Features

Real-time Inventory Tracking
-Monitor inventory levels in real time.

Customer Management
-Maintain detailed records of customers.

Notifications and Alerts
-Receive alerts about stocks

System Requirements

Operating System
-Windows, macOS, or Linux

Database
-MongoDB

Web Server
-Express (Node.js)

Programming Language
-JavaScript (Node.js, React)

Installation

Clone the repository
git clone https://github.com/SGopinath89/IT22242024StockMaster.git

Navigate to the project directory

cd StockMaster

Backend Setup

Navigate to the backend directory

cd backend

Install the backend dependencies

npm install

Create a .env file and add the following environment variables
MONGO_URI = mongodb://localhost:27017/StockMaster

NODE_ENV = development

JWT_SECRET = bash1234

FRONTEND_URL = http://localhost:3000

Start the backend server

npm start

Frontend Setup

Navigate to the frontend directory

cd ../frontend

Install the frontend dependencies

npm install

Start the frontend development server

npm start

Configuration

Database Configuration

-Update the MONGO_URI in the .env file to match your MongoDB connection string.

JWT Secret

-Set a secure JWT_SECRET in the .env file for authentication.

Usage

Access the application

Open your web browser and navigate to http://localhost:3000

Register or log in to start managing inventory.

Manage Inventory

Add new products and customers through the user interface.

Monitor inventory levels.





