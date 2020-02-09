import dotenv from 'dotenv'
import express from 'express'
import startMongoose from './utils/mongoose'
import goalRouter from './routes/goals/goal.route'
import authRouter from './routes/authentication/auth.route'
import auth from './middlewares/auth.middleware'

dotenv.config()

const app = express()

app.use(express.urlencoded())

app.use(express.json())

startMongoose()

app.get('/api', (req, res) => {
    res.send('Welcome to Pyggy')
})

app.use('/api/auth', authRouter)
app.use('/api/goals', auth, goalRouter)

app.listen(5000, () => console.log('Example app listening on port 3000!'))
