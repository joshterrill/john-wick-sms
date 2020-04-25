const express = require("express");
const dotenv = require("dotenv");
const Twilio = require("twilio");
const cors = require('cors')

dotenv.config();

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;
const twilio = undefined;

app.use(cors());
app.use(routes(twilio));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});