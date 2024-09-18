Here’s a README template for your project, covering the setup, usage, and functionalities of the application:

---

# Orders Management System

A simple application that allows users to view a list of fulfillment orders and add new orders. The application is built using Next.js for the frontend, Express.js with TypeScript for the backend, and Prisma with PostgreSQL for database management.

## Features

- **View Orders**: Displays a list of orders with details like Order ID, Customer Name, and Status.
- **Add Orders**: Allows users to add new orders through a form.

## Tech Stack

- **Frontend**: 
  - React (with Next.js)
  - TypeScript
  - Tailwind CSS
  - React Table
- **Backend**: 
  - Express.js
  - TypeScript
  - Prisma
  - PostgreSQL
- **Styling**: Tailwind CSS
- **UI Components**: shadcn components

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Nikuunj/Mini-Order-Status-Tracker.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   For the frontend:

   ```bash
   cd frontend
   npm install
   ```

   For the backend:

   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the `backend` directory and add the following variables:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/your-database-name
   ```

   Replace `user`, `password`, `localhost`, `5432`, and `your-database-name` with your PostgreSQL credentials.

4. **Set Up the Database**

   - Run the Prisma migrations to set up the database schema:

     ```bash
     cd backend
     npx prisma migrate dev
     ```

5. **Start the Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

   The backend server will run on `http://localhost:5000`.

6. **Start the Frontend Development Server**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend development server will run on `http://localhost:3000`.

## Usage

- **View Orders**: Navigate to the main page to see a list of orders in a table format.
- **Add Orders**: Use the form at the top of the page to add new orders. Fill in the Customer Name and Status fields and click the "Add Order" button.

## API Endpoints

- **GET /orders**: Fetches a list of orders from the database with optional filtering and pagination.

  - **Query Parameters**:
    - `status` (optional): Filter orders by status.
    - `page` (optional): Page number for pagination (default is 1).
    - `pageSize` (optional): Number of orders per page (default is 10).

- **POST /orders**: Adds a new order to the database.

  - **Request Body**:
    - `customerName`: The name of the customer (string).
    - `status`: The status of the order (string).