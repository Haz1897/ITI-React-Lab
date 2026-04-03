import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const moviesContext = createContext();
const MoviesContextProvider = ({children})=>
{
    const [movies,setMovies] = useState([]);
    useEffect(()=>
    {   
       axios.get("http://localhost:8000/movies").then(
        (res)=>
        {
            console.log(res);
            setMovies(res.data.movies);
        }
       ) 
    },[])
    function updateMovie(ID,movie)
    {
        axios.put(`http://localhost:8000/movie/${ID}`,movie).then(
            (res)=>
            {
                if(res.data.success)
                {
                    setMovies(
                        (old)=>
                        {
                            const index = movies.findIndex(m=>m._id===ID);
                            old[index] = movie;
                            return [...old];
                        })
                }
            }
        )
    }
    function addMovie(movie)
    {
        console.log("adding")
         axios.post(`http://localhost:8000/movie`,movie).then(
            (res)=>
            {
                if(res.data.success)
                {
                    setMovies(
                        (old)=>
                        {
                            return [...old,res.data.movie];
                        })
                }
            }
        )
    }
    function deleteMovie(ID)
    {
        axios.delete(`http://localhost:8000/movie/${ID}`).then(
            (res)=>
            {
                if(res.data.success)
                {
                    setMovies(
                        (old)=>
                        {
                            const index = old.findIndex(m=>m._id===ID);
                            old.splice(index,1);
                            return [...old];
                        }
                    )
                }
            }
        )
    }
    return(
        <moviesContext.Provider value={{movies,updateMovie,addMovie,deleteMovie}}>
            {children}
        </moviesContext.Provider>
    )
}

export default MoviesContextProvider;