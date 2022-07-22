const express = require('express');
const router = require('./routes/routes');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT||7000
mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology:true,
}, () => console.log("Database Connected"));

app.use('/api', router);
app.listen(PORT, () => console.log('Listening at port ' + `${PORT}`))


