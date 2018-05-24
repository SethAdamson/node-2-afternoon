const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');
const massive = require('massive');
const path = require('path');
require('dotenv').config()
const ctrl = require('./products_controller')

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, './node-react/public')))

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance) );

app.get(`/api/products`, ctrl.getAll);
app.get(`/api/product/:id`, ctrl.getOne);
app.put(`/api/product/:id`, ctrl.update);
app.post(`/api/product`, ctrl.create);
app.delete(`/api/product/:id`, ctrl.delete);


const port = 3005;
app.listen( port, () => {
    console.log(`Server listening on port ${port}.`)
    })
