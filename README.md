# Recipe Finder (React Native)

Recipe Finder is a React Native application that allows users to add, update, delete, and search for recipes.

## Features
- **Add Recipe**: Users can add new recipes with details.
- **Update Recipe**: Modify existing recipe information.
- **Delete Recipe**: Remove a recipe from the database.
- **Search Recipe**: Find recipes based on keywords.

## Tech Stack
### **Frontend**
- React Native
- Expo

### **Backend**
- NestJS
- MySQL

## Installation & Setup
### **Prerequisites**
Ensure you have the following installed:
- Node.js
- Expo CLI
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

### **Backend Setup (NestJS)**
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MySQL service (if not already running):
   ```sh
   sudo systemctl start mysql
   ```
4. Access MySQL and create the database manually:
   ```sh
   mysql -u root -p
   ```
   Then, inside MySQL:
   ```sql
   CREATE DATABASE recipe_finder;
   USE recipe_finder;
   ```
5. Configure the MySQL database connection in `.env`:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=recipe_finder
   ```
6. Start the NestJS server:
   ```sh
   npm run start:dev
   ```

## Contributing
Feel free to submit pull requests or report issues.

## License
This project is licensed under the MIT License.

