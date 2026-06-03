const express = require('express');

const cors = require('cors');

const connectDB = require('./db');

const courseRoutes = require('./routes/CourseRoutes');

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.use('/course', courseRoutes);

app.listen(5000, () => {

    console.log('Server Running on Port 5000');

});