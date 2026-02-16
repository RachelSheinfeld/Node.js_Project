require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// זה התיקון הקריטי שהוספת - מעולה!
app.use(express.json());

// חיבור הנתיבים
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

// עדיף למשוך את הכתובת מה-env (MONGO_URI)
const dbURI = 'mongodb+srv://r0583226902_db_user:5fr9iER16GmkVIiB@clusterrachelisheinfeld.dp1lppg.mongodb.net/?appName=clusterRacheliSheinfeld';

mongoose.connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

