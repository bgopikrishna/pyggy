import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import startMongoose from './utils/mongoose';
import goalRouter from './routes/goals/goal.route';
import authRouter from './routes/authentication/auth.route';
import auth from './middlewares/auth.middleware';
import userRouter from './routes/user/user.route';

const path = require('path');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.urlencoded());

app.use(express.json());

startMongoose();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build/')));

    app.get('/', (res, req) => {
        res.sendFile(path.join(`${__dirname}/client/build/`));
    });
}

app.get('/api', (req, res) => {
    res.send('Welcome to Pyggy');
});

console.log('Environment', process.env.NODE_ENV);

app.use('/api/auth', authRouter);
app.use('/api/goals', auth, goalRouter);
app.use('/api/user', auth, userRouter);

app.listen(5000, () => console.log('Example app listening on port 5000!'));
