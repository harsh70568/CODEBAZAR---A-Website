// Importing modules
const express = require("express");
const app = express();
require("./db/conn");
const user = require("./models/usermessage");
const path = require("path");
const hbs = require("hbs");
const PORT = process.env.PORT || 3000

// setting Path to connect backend to frotend
const staticPath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// using middlewares to serve static Files
app.use(express.urlencoded({extended:false}));   // -------> Important Line (used to show th data when submitited by user)
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticPath));

// using template engines (For dynamic content)
app.set("view engine", "hbs");
app.set("views", tempPath);

// Registering partials  (when we have the common code)
hbs.registerPartials(partialPath);

// Routing
app.get("/", (req, res) => {
    res.render("index");
})

// Getting the data from the form
app.post("/contact", async(req, res) => {
    try {
        //res.send(req.body);
        const userData = new user(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch(error){
        res.status(500).send(error); 
    }
})

// Listening to the server
app.listen(PORT, () => {
    console.log(`Listening to the server at ${PORT}`)
})

