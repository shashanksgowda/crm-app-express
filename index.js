import express from 'express';
import routes from './src/routes/crmRoutes.js';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';


const PORT = 4000;
const app = express();

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

routes(app);

app.get('/',(req, res) =>
    {
        res.send("App has just received an GET Request")
    }
)

app.listen(PORT, () => 
    console.log('CRM Server is now running')
);

//Serving static files    
app.use(express.static('public')); 