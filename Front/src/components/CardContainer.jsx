import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';
import { moviesContext } from '../contexts/movieContextProvider';
import { useContext } from 'react';

export default function CardContainer({deletable}) {
  const {movies} = useContext(moviesContext);
  if(movies.length==0) return(<div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>Please add movies first.</div>)
  return (
  
  <Grid container spacing={{ xs: 2, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{padding:"20px"}}>
       
       {
        movies?.map(m=>
          <Grid key={m._id} size={{ xs: 4, sm: 4, md: 4 }}>
           <MovieCard {...m} deletable={deletable}></MovieCard>
          </Grid>
        )
       }
      
        
      </Grid>
      
   
  );
}