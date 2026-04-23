# 💡 AI-Infotech-Solution-Website.

Welcome to the **AI-Infotech-Solution-Website** — a full-stack web app designed to collect and manage user feedback effortlessly. Built with React and Node.js, and powered by MySQL and AWS, this project seamlessly blends performance, design, and functionality.

---

## 🔗 Live Preview

🌐 **Check it out live:**  
👉 [AI InfoTech Classes](https://aiinfotechclasess.netlify.app/)

---

## 🚧 Project Overview

This application lets users submit feedback via a sleek, responsive form. Submissions are processed through a Node.js backend, saved in a MySQL database, and trigger a notification email via Nodemailer. Fully deployed on **AWS EC2** using **Nginx** for production-grade performance.

---

## ⚙️ Built With

- 🎨 **Frontend**: React, HTML5, CSS3
- 🧠 **Backend**: Node.js, Express
- 🗄️ **Database**: MySQL, Sequelize ORM
- ✉️ **Email Service**: Nodemailer (Gmail SMTP)
- ☁️ **Infrastructure**: AWS EC2 (Ubuntu), Nginx, PM2

---

## ✨ Key Features

- 📥 Stores data using Sequelize ORM
- ✉️ Sends automatic email notifications on each submission


---

## 🚀 Getting Started

### 🔁 Clone the Repository

```bash
git clone https://github.com/vardhans07/AI-Infotech-Solution-Website..git
```
```bash
cd AI-Infotech-Solution
```

2. Install dependencies:

```bash
npm install

```

3. Build frontend 

```bash
npm run build

```
This creates infotech/build/ with static files.

## Database Setup (MySQL)

Log in to MySQL:

```bash
mysql -u root -p

```

Create database and table:

```bash
CREATE DATABASE infotech_db;
```
```bash
USE infotech_db;
```
```bash 
CREATE TABLE Feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```



