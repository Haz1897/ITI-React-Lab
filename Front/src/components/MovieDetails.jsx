import { useParams } from "react-router-dom";
import { moviesContext } from "../contexts/movieContextProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";

export default function MovieDetails()
{
    const {ID} = useParams();
    const [movie,setMovie] = useState(null);
    const {movies} = useContext(moviesContext);
    useEffect(
        ()=>
        {
            setMovie(movies.find(m=>m._id===ID))
        }
    ,[]);
    return(
        <>
            <Grid container spacing={{ md: 1 }} columns={{xs:6, sm: 6, md: 12 }} justifyContent="center" alignContent="center" style={{padding:"20px"}}>
                <Grid size={{sm:4,md:4}}>
                    <img src={movie?.imgURL} style={{borderRadius:"10px"}}></img>
                </Grid>
                <Grid size={{sm:8,md:8}} alignContent="center">
                    <Card variant="outlined" >
                        <CardContent >
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                Rating:
                            </Typography>
                            <Typography variant="h5" component="div">
                                {movie?.movieName}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Description:</Typography>
                            <Typography variant="body2">
                                {movie?.description}
                            </Typography>
                            </CardContent>
                            
                    </Card>
                    
                </Grid>
            </Grid>
        </>
    )
}