const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDataBase = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDataBase();

let app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);


app.listen(process.env.server_port_local, () => {
    console.log('server is running at port:', process.env.server_port_local);
});


