import { connect } from 'mongoose'

const startMongoose = () => {
    connect(process.env.MONGO_KEY, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to mongoDB')
        })
        .catch((err) => {
            console.log('Error mongodb', err)
        })
}

export default startMongoose
