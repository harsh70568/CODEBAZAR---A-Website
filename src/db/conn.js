// Importing modules
const mongoose = require("mongoose");

// Connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/ankur", {
    // in order to prevent deprication errors
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex : false
})
.then( () => console.log("Connected Sucessfully"))
.catch( (err) => console.log(err));
