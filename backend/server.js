const express = require('express')
const connectDb = require('./config/db')
const dotenv = require('dotenv');
const userRouter = require('./router/userRoute');

const app = express()
dotenv.config()
app.use(express.json());
connectDb();


app.use('/api/user', userRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at port ${PORT}`));