require("dotenv").config();
const express = require('express');//imports express package
const app = express();
const PORT = process.env.PORT || 4321;//assigns localhost port



app.get('/', (request, response) => {
  response.send(`hello world i am listening to port ${PORT}`)
})

app.get('/dburl', (request, response) => {
  response.send(`My connection string is: ${process.env.DATABASE_URL}`)
});

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`); //completely optional
});

