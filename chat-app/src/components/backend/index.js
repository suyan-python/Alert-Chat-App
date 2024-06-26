const express = require("express");
// import express from 'express';

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('', (req, res) =>
{
    res.send('Backend is working');
});
const userRouter = require('./modules/user/router');
const authRouter = require('./modules/authentication/router');

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(8080, async (req, res) =>
{
    console.log('App is running on port 8080');
    try
    {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.wtmdchg.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Database is connected')
    } catch (e)
    {
        console.log(e);
    }
});

// express, nodemon, mongoose, cors, moment, dotenv, bcrypt, jsonwebtoken, passport