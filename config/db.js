const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex : true,
            useFindAndModify : true,
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log("MongoDB connection established...");
    } catch (error) {
        console.error({msg : error.message});
        process.exit(1);
    }
}

module.exports = connectDB;