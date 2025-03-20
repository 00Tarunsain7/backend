require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res) => {
    res.send('Bhai Login page hai ye')
})
app.get('/twitter',(req,res) => {
    res.send('twitter Chalu kar diya hai mene')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})