const { connect, set } = require('mongoose');

set('toJSON', { virtuals: true });

const startMongoose = () => {
    connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Connected to mongoDB');
        })
        .catch((err) => {
            console.log('Error mongodb', err);
        });
};

module.exports = startMongoose;
