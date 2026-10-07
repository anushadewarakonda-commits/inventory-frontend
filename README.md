# 🛒 Anusha's E Store

### Cloud-Powered Inventory Management & E-Commerce Platform

![Project Architecture](Anusha’s E Store Architecture Showcase (1).png)

## 📌 Overview

Anusha's E Store is a modern e-commerce and inventory management
application built using React and AWS cloud services.

The application provides a responsive product shopping experience
and is designed to integrate with a serverless AWS backend for
product and inventory management.

## 🏗️ Architecture

```text
React Frontend
      │
      │ HTTPS / REST API
      ▼
AWS Amplify
      │
      ▼
Amazon API Gateway
      │
      ▼
AWS Lambda
(Java 21)
      │
      ▼
Amazon DynamoDB
