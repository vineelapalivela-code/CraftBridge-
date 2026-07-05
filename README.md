# CraftBridge

CraftBridge is a web platform that connects local artisans with customers looking for authentic handmade products.

## Features

- Home Page
- About Page
- Dashboard
- Login
- Responsive Design
- Reusable React Components
- Built with Next.js and Tailwind CSS

This project was developed as part of my Week 2 Internship Assignment.                  
## Backend Setup

1. Open the backend folder.

```bash
cd backend
```

2. Install dependencies.

```bash
npm install
```

3. Create a `.env` file.

```
PORT=5000
```

4. Start the backend.

```bash
npm run dev
```

Backend will run at:

```
http://localhost:5000
```
## Database Choice

MongoDB Atlas was chosen because CraftBridge stores craft items as documents. MongoDB provides a flexible schema and integrates well with Node.js using Mongoose.
## Database Setup

1. Clone the repository
2. Navigate to backend
3. Run:

```bash
npm install
```

4. Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_connection_string
```

5. Run

```bash
npm run dev
```
## Schema Diagram

![Schema](schema.png)