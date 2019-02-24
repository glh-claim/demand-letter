const express = require('express'),
      app = express();

app.post('/input', (req, res) => {
  
})


app.get('/output', (req, res) => {
  res.send({output: "dialog"});
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("App is running...");
})
