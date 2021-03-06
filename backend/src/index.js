const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('INSERT DB URL', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);