import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import startMongoose from './utils/mongoose';
import goalRouter from './routes/goals/goal.route';
import authRouter from './routes/authentication/auth.route';
import auth from './middlewares/auth.middleware';
import userRouter from './routes/user/user.route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

startMongoose();

console.log('Environment', process.env.NODE_ENV === 'production');

app.get('/api', (req, res) => {
    res.send('Welcome to Pyggy');
});

app.use('/api/auth', authRouter);
app.use('/api/goals', auth, goalRouter);
app.use('/api/user', auth, userRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build/'));

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
