const express= require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const movieController = require("./Controllers/movieController")
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173'}));
mongoose.connect(process.env.connectionString);

app.get("/movies",async (req,res)=>
{
    const movies = await movieController.getAll();
    res.send({movies});
});

app.get("/movie/:id", async (req,res)=>
{

});
app.post("/movie", async (req,res)=>
{
    // console.log(req.body);
    const movie = await movieController.add(req.body);
    movie._id= movie._id.toString();
    console.log(movie);
    delete movie.__v;
    res.send({success:true,movie});
});

app.put("/movie/:id", async (req,res)=>
{
    const ID = req.params.id;
    const result = await movieController.update(ID,req.body);
    res.send({success:true});
});
app.delete("/movie/:id", async (req,res)=>
{
    const ID = req.params.id;
    const result = await movieController.deleteByID(ID);
    res.send({success:true});
});
app.listen(8000)