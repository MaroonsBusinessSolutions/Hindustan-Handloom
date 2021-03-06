require("dotenv").config();
const express = require ('express');
const env = require ('dotenv');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
// routes

const authRoutes = require('./src/routes/auth');
const adminRoutes = require('./src/routes/admin/auth');
const categoryRoutes = require('./src/routes/category');
const productRoutes = require('./src/routes/product');
const cartRoutes = require('./src/routes/cart');
const initialDataRoutes = require('./src/routes/admin/initialData');
const pageRoutes = require('./src/routes/admin/page');
const addressRoutes = require("./src/routes/address")
const orderRoutes = require("./src/routes/order");
const adminOrderRoute = require("./src/routes/admin/order.routes");

//environment variables or you can say constants
env.config();
app.use(bodyParser.json());

//mongodb connection
//mongodb+srv://root:<password>@cluster0.fflpw.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    // `mongodb+srv://root:admin@cluster0.fflpw.mongodb.net/ecommerce?retryWrites=true&w=majority`, 
    `mongodb://root:admin@cluster0-shard-00-00.fflpw.mongodb.net:27017,cluster0-shard-00-01.fflpw.mongodb.net:27017,cluster0-shard-00-02.fflpw.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-fc90pe-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    ).then (() => {
            console.log('Database Connected');
    });

app.use(express.json());

// app.get('/', (req,res, next) => {
//     res.status(200).json(
//         {message: 'Hello MERN Dakshin Bharath Handloom' 
//     });
// });


// app.post('/data', (req,res, next) => {
//     res.status(200).json(
//         {message: req.body 
//     });
// });


app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join((path.dirname(__dirname, 'uploads' )))));
app.use('/api', authRoutes);
app.use('/api', adminRoutes); 
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', initialDataRoutes);
app.use('/api', pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);

app.listen(2000, () => {
    console.log(`Server is running on port ${2000}`);
});