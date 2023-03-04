const mongoose = require('mongoose')

const connectdB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        mongoose.set('strictQuery', true);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit();
    }
}

module.exports = connectdB;