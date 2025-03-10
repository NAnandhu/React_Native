# Recipe Finder App - User Module

## Overview
The **Recipe Finder App** is a web and mobile application that allows users to manage their accounts by adding, updating, deleting, and retrieving user information. This project consists of a **React Native frontend**, a **Next.js backend**, and a **MySQL database** for a responsive and user-friendly interface.

---

## Features
### **User Module**
- **Add User**: Users can create an account with their details.
- **Update User**: Modify existing user information.
- **Delete User**: Remove a user from the database.
- **Get Users**: Retrieve a list of registered users.
- **Manage Recipes**: Users can add, update, delete, and search for recipes.

---

## Tech Stack
### **Frontend**
- React Native
- Expo
- Bootstrap 5 (for web components)

### **Backend**
- Next.js (API Routes)
- NestJS
- MySQL (Database)

---

## Installation & Setup
### **Prerequisites**
Ensure you have the following installed:
- Node.js (v16+)
- MySQL Database
- Git

### **Clone the Repository**
```bash
git clone https://github.com/yourusername/recipe-finder.git
cd recipe-finder
```

### **Frontend Setup (React Native)**
1. Navigate to the frontend directory:
   ```sh
   cd myApp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React Native application using Expo:
   ```sh
   npx expo start
   ```

### **Backend Setup (Next.js + NestJS)**
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure the MySQL database connection in `.env`:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=recipe_finder
   ```
4. Run database migrations
   ```sh
   sudo systemctl start mysql
   ```
5. Start the Next.js server:
   ```sh
   npm run start:dev
   ```

## Technologies Used
- **Frontend:** React Native, Expo, Bootstrap 5
- **Backend:** Next.js, NestJS
- **Database:** MySQL

## Contributing
Feel free to submit pull requests or report issues.

## License
This project is licensed under the MIT License.

