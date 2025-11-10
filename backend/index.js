import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';


import routes from './routes/index.js';
dotenv.config();


const app = express();


app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ["Content-Type", "Authorization"],

}));
app.use(morgan('dev'));

//db connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.log("MongoDB connection error:", err));


app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', async(req, res) => {
    res.status(200).json({
        message: "Welcome to Taskify API"
    });
});
// http:localhost:5000/api-v1/...
app.use('/api-v1', routes);

//error middleware
app.use((err, req, res, next ) => {
    console.error(err.stack);
res.status(500).json({
    message: "Internal server error ",
});
});


// not found middleware
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
