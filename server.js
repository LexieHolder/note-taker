const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const app = express();

//connects to public folder
app.use(express.static('public'));
//sets up for post requests
app.use(express.urlencoded({ extended: true }));
//middleware function parsing incoming requests
app.use(express.json());









app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});