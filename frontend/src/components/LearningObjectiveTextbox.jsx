import React, {useState} from 'react';
import {Stack, IconButton, TextField} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export default function LearningObjectiveTextbox(props){
    return(
        <Stack direction="row" spacing={2}>
                <TextField sx={{width:'100%'}} value={props.value} variant="outlined" size="small"/>
                <IconButton onClick={() => {props.handleRemove(props.loIndex)}}>    
                    <CancelIcon/>
                </IconButton>
        </Stack>
    )
}