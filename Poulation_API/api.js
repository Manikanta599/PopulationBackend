const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formroutes'); 

const app = express();

app.use(express.json());
app.use(cors());


app.use('/', formRoutes);

app.listen(8090, () => {
    console.log("Server started on port 8090");
});
