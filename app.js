//Required Packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 2021;
const app = express();
dotenv.config();
const userAuth = require('./Router/Users');
const mobile = require('./Router/mobile');
const fashionmen = require('./Router/fashionmen');
const fashionwomen = require('./Router/fashionwomen');
const fashionkids = require('./Router/fashionkids');
const electronics = require('./Router/electronics');
const appliances = require('./Router/appliances');
const searchproduct = require('./Router/searchproduct')
const order = require('./Router/Order');
const customercare = require('./Router/customercare');
const payment = require('./Router/payment');

//Middle ware
app.get('/',(req,res)=>{
res.send('Welcome to Amazon DB Services');
});
app.use(cors());
app.use(express.json());
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
app.use('/api', payment);


mongoose.connect(process.env.SERVER_MONGO_URL).
    then(() => {
        app.listen(PORT, () => {
            console.log(`service started @${PORT}`);
        })
    }).catch(err => console.log('DB not connected'));
