import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, CardActions, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AlertDialog from './Dialog';
import { moviesContext } from '../contexts/movieContextProvider';
import { useContext } from 'react';

export default function MovieCard({_id,movieName,imgURL,description,rating,deletable}) {
  const [open, setOpen] = useState(false);
  const {deleteMovie} = useContext(moviesContext);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  const navigate = useNavigate();
  function navigateToUpdate(e)
  {
    e.preventDefault();
    navigate(`/update/${_id}`);
  }
  return (
    <>
    <AlertDialog open={open} handleClose={handleClose} deleteMovie={()=>{deleteMovie(_id)}}></AlertDialog>
    <Link to={`/movie/${_id}`} onClick={(e)=>{if(deletable)e.preventDefault()}} style={{textDecoration:"none"}}>
      <Card sx={{ maxWidth: 345,position:"relative" }}>
        { deletable? 
        <Button sx={{position:"absolute", right:10,top:10,zIndex:1}} color='error' size="small" variant="contained" onClick={handleClickOpen}>
            <Delete></Delete>
        </Button>
        :
        <Button sx={{position:"absolute", right:10,top:10,zIndex:1}} size="small" variant="contained" onClick={(e)=>{navigateToUpdate(e)}}>
            <Edit></Edit>
        </Button>
        }
         
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgURL}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movieName}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
      </Link>
     </>
  );
}