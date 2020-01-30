import dotenv from 'dotenv'
import express from 'express'


dotenv.config()

const app = express();


app.get('/', (req,res) => {
    res.send('Welcome to Pyggy')
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);