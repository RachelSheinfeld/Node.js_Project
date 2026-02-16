const express = require('express');
const mongoose = require('mongoose'); // ייבוא של mongoose
const app = express();

// מחרוזת ההתחברות שהעתקת מהאתר של MongoDB
const dbURI = 'mongodb+srv://r0583226902_db_user:5fr9iER16GmkVIiB@clusterrachelisheinfeld.dp1lppg.mongodb.net/?appName=clusterRacheliSheinfeld';

// התחברות למסד הנתונים
mongoose.connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    // רק אחרי שהתחברנו למסד הנתונים, נפעיל את השרת
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });