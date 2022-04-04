import React from 'react';
import {Stack, IconButton, TextField} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export default function LearningObjectiveTextbox(props){
    const removeLine = (key) => {
        console.log(key);
    }
    return(
        <Stack direction="row" spacing={2}>
                <TextField sx={{width:'100%'}} variant="outlined" size="small"/>
                <IconButton onClick={() => {removeLine(props.loIndex)}}>    
                    <CancelIcon/>
                </IconButton>
        </Stack>
    )
}