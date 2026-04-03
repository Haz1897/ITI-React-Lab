const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = Schema(
    {
        movieName:{type:String,required:true},
        imgURL:{type:String,required:true},
        description:{type:String,required:true},
        rating:{type:Number,required:true}
    }
);

const Movies = mongoose.model("Movies",movieSchema);

module.exports= Movies;