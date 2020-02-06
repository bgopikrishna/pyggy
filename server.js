import dotenv from 'dotenv'
import express from 'express'
import startMongoose from './utils/mongoose'

dotenv.config()

const app = express()

app.use(express.urlencoded())

app.use(express.json())

startMongoose()

app.get('/api', (req, res) => {
    res.send('Welcome to Pyggy')
})

app.listen(5000, () => console.log('Example app listening on port 3000!'))
