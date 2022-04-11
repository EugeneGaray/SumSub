const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(express.json({ extended: false }));
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/',(req, res) => res.send('API Running'));

// // Define Routers
server.use('/token', cors(), require('./routes/getNewAccessToken'));

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 
