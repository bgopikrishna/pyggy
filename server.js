import dotenv from 'dotenv'
import express from 'express'


dotenv.config()

const app = express();

app.use(express.json())


app.get('/api', (req,res) => {
    res.send('Welcome to Pyggy')
})

app.listen(5000, () =>
  console.log('Example app listening on port 3000!'),
);