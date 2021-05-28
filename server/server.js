const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const port = 4000
const resume = require('./db.json')

app.use(cors())

app.get('/resume', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, jsonObj) => {
    if (err) {
      console.log(`Error occurred while reading json file: ${err}`)
      return
    }
    res.send(jsonObj);
    
  })
})

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})