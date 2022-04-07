import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function HomepageCard(props){
    const handleClick = (e) => {

    }
    const navigate = useNavigate();
    return(
        
        <Card sx={{width:'400px'}}>
            <CardHeader title={props.title}/>
            <div className="img-container">
            <CardMedia 
                className="card img"
                component="img"
                image={require("../../../backend/uploads/"+props.image)}/>
            </div>
            <CardContent>
                <Typography variant="body1">{props.body}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" sx={{marginLeft:"auto"}} onClick={() => { 
                    navigate(props.buttonUrl)
                }}>{props.buttonText}</Button>
            </CardActions>
        </Card>
    )
}