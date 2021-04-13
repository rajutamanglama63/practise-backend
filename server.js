const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const bookRoute = require("./routes/bookRoutes");

const app = express();

dotenv.config();
const Port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/bookRoutes", bookRoute);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});

