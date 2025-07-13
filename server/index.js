let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const enquiryRouter = require('./App/routers/web/enquiryRoutes');
require('dotenv').config();
let app = express();

app.use(express.json());
app.use(cors());
//Routes
app.use('/api/website/enquiry',enquiryRouter);

//connect to mongodb

mongoose.connect(process.env.DBURL).then(()=>{
    console.log('Connected To MongoDB');
    app.listen(process.env.PORT || 3000,()=>{
        console.log('server is running');
    })
}).catch((err)=>{ console.log(err)})