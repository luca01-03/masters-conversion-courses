const express = require('express');
const app = express();
const courseRoutes = require('./routes/courseRoutes');

app.use(express.json());
app.use('/api', courseRoutes);

module.exports = app;