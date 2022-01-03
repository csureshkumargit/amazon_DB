//Required Packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
dotenv.config();
const port = process.env.PORT || 2021;
const userAuth = require('./Router/Users');
const mobile = require('./Router/mobile');
const fashionmen = require('./Router/fashionmen');
const fashionwomen = require('./Router/fashionwomen');
const fashionkids = require('./Router/fashionkids');
const electronics = require('./Router/electronics');
const appliances = require('./Router/appliances');
const searchproduct = require('./Router/searchproduct');
const order = require('./Router/Order');
const customercare = require('./Router/customercare');
const tempOrders = require('./Router/tempOrders');
const payment = require('./Router/payment');

//Middle ware
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
//app.use(cors({ origin: "https://amazon-clone-shop.herokuapp.com", credentials: true }));
//app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Welcome to Amazon DB Services');
})
app.use('/api/user', userAuth);
app.use('/mobile', mobile);
app.use('/fashionmen', fashionmen);
app.use('/fashionwomen', fashionwomen);
app.use('/fashionkids', fashionkids);
app.use('/electronics', electronics);
app.use('/appliances', appliances);
app.use('/searchproduct', searchproduct);
app.use('/api/orders', order);
app.use('/api/customercare', customercare);
app.use('/api/tempOrders', tempOrders);
app.use('/api', payment);


mongoose.connect(process.env.SERVER_MONGO_URL).
    then(() => {
        app.listen(port, () => {
            console.log(`service started @ ${port}`);
        })
    }).catch(err => console.log('DB not connected'));
