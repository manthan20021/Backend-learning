require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Manthan')
})

app.get('/fathersname', (req, res) => {
    res.send("Rajkumar")
})

app.get('/lastname', (req, res) => {
    res.send("Harale")
})

app.listen(process.env.PORT, () => {
    console.log(`${port}`);
})

