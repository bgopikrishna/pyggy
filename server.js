const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const startMongoose = require('./server/utils/mongoose');
const goalRouter = require('./server/routes/goals/goal.route');
const authRouter = require('./server/routes/authentication/auth.route');
const auth = require('./server/middlewares/auth.middleware');
const userRouter = require('./server/routes/user/user.route');
const emailRouter = require('./server/routes/email/email.route');

dotenv.config();

const app = express();

app.use(helmet());

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
app.use('/api/', emailRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`App listening on port http://localhost:${PORT}`)
);
