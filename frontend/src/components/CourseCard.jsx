import React from 'react';
import {Box, Typography, Stack, Card, CardContent, CardMedia, Button, CardActions, Divider, Paper} from '@mui/material';

export default function CourseCard(props) {
    return(
        <Box sx={{width:'100%'}}>
            <Paper sx={{padding:2}}>
                <Stack direction="row">
                <CardMedia component="img" sx={{width:125, height:125}} image={props.image}/>
                <Stack justifyContent="center">
                    <Typography variant="h6" sx={{width:'100%'}}>{props.title}</Typography>
                    <Typography variant="body1">{props.description}</Typography>
                </Stack>
                <Button variant="contained" color="secondary" sx={{width:300, height:30}}>{props.pathwayTag}</Button>
                </Stack>
                
                <Divider sx={{marginBottom:2}}/>
                <Stack direction="row" spacing={2}>
                    <Button size="small">View</Button>
                    <Button size="small">Delete</Button>
                </Stack>
            </Paper>
        </Box>
    )
}