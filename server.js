const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlRoutes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);