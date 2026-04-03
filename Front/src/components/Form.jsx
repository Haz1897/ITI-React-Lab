import { Button, Grid, TextField } from "@mui/material";
import style from "../styles/Form.module.css"
import { Add, Edit, SettingsApplications } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { moviesContext } from "../contexts/movieContextProvider";
export default function Form({update})
{  
    const [movie,setMovie] = useState({movieName:"",imgURL:"",description:"",rating:""});
    const {movies,addMovie,updateMovie} = useContext(moviesContext);
    const {ID} = useParams();
    const navigate = useNavigate();
    function handleChange(e)
    {
        const regex= /^(10(\.0?)?|[0-9](\.[0-9]?)?)?$/;
        const {name,value} = e.target;
        if(name!=="rating" || (regex.test(value)))
        {
             setMovie(movie=>({...movie,[name]:value}));
            
        }
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("submitting");
      
        if(update)
        {
              // Update database
             // Update context
            updateMovie(ID,movie);
        }
        else
        {
            // Add database
            // Add to context
            addMovie(movie);
        }
        // Reroute to main
        navigate("/")
    }

    // In case of update, fill in form data
    useEffect(
    ()=>
    {
        if(update)
        {
            console.log("Filling form data");
            setMovie(movies.find(m=>m._id===ID));
        }
    }
    ,[])
    return(
        <div className={style["container"]}>
            <form onSubmit={handleSubmit}>
                <Grid  container columns={12} rowSpacing={3}>
                    <Grid size={12}>
                        <TextField required fullWidth name="movieName"  label="Movie Name" variant="outlined" value={movie.movieName} onChange={(e)=>{handleChange(e)}}/>
                    </Grid>
                    <Grid size={12}>
                        <TextField required fullWidth name="imgURL" label="Image URL" variant="outlined" value={movie.imgURL} onChange={(e)=>{handleChange(e)}} />
                    </Grid>
                    <Grid size={12}>
                        <TextField required multiline fullWidth name="description" label="Movie Description" variant="outlined" value={movie.description} onChange={(e)=>{handleChange(e)}}/>
                    </Grid>
                    <Grid container size={12} columnSpacing={3}>
                        <Grid size={10}>
                            <TextField required type="number"
                                name="rating" 
                                slotProps={{input:{inputProps:{min:0,max:10,step: 0.1}}}}
                                fullWidth 
                                placeholder="Rating out of 10"
                                label="Movie Rating"
                                variant="outlined"
                                value={movie.rating}  onChange={(e)=>{handleChange(e)}}/>
                        </Grid>
                        <Grid size={2}  justifyContent={"center"} alignContent={"center"}>
                        {
                            update ?
                            
                            <Button fullWidth  variant="contained" type="submit" endIcon={<Edit/>}>
                                Update
                            </Button>
                            :
                            <Button fullWidth  variant="contained" type="submit" endIcon={<Add/>}>
                                Add
                            </Button>
                        }
                        
                        </Grid>
                        
                    </Grid>
                </Grid>
                
            </form>
        </div>
        
    )
}