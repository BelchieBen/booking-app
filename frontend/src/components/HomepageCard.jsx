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
        
        <Card sx={{width:'400px', display: 'flex', flexDirection:'column', alignItems: 'center',justifyContent: 'flex-start'}}>
            <CardMedia 
                className="card img"
                component="img"
                image={require("../../../backend/uploads/"+props.image)}/>
            
            <CardHeader title="Course Added!" sx={{padding:0}}/>
            <CardContent sx={{paddingTop:0, paddingBottom:0, textAlign: 'center'}}>
                <Typography variant="body1">A new course {props.body} has been added!</Typography>
            </CardContent>
            <CardActions sx={{paddingBottom:2}}>
                <Button variant="contained" sx={{marginLeft:"auto"}} onClick={() => { 
                    navigate(props.buttonUrl)
                }}>{props.buttonText}</Button>
            </CardActions>
        </Card>
    )
}