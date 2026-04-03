const mongoose = require("mongoose");
const Movies = require("../models/Movies")

function getAll()
{
    return Movies.find().lean();
}
function getByID(ID)
{
    return Movies.find({_id:new mongoose.Types.ObjectId(ID)}).lean();
}
function add(movie)
{
    return Movies.insertOne(movie);
}

function update(ID,movie)
{
    return Movies.updateOne({_id:new mongoose.Types.ObjectId(ID)},{$set:movie});
}

function deleteByID(ID)
{
    return Movies.deleteOne({_id:new mongoose.Types.ObjectId(ID)});
}
module.exports = {getAll,getByID,add,update,deleteByID}