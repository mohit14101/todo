const express = require("express");
const app= express();
require("./database/db");
const cors = require('cors');
const authRoutes  = require('./routes/authRoutes');
const taskRoutes  = require('./routes/taskRoutes');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth',authRoutes);
app.use('/task',taskRoutes);


const port = 4000;
app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})