**Steps to get website to work:**

**In VSCode Terminal:**
npm install express
npm install dotenv
npm install mysql2

**Create a .env file with the following content:**
MYSQL_HOST = "localhost"
MYSQL_USERNAME = "your_username"
MYSQL_PSWD = "your_password"
MYSQL_DB = "database_name"


**In MySQL Command Client:**
CREATE DATABASE database_name;
USE database_name;

**In VSCode Terminal:**
npm run dev

