const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbconnection");

connectDB(); // Connects to db and creates initial 3 roles

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Working!");
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});