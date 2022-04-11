import React, {useState} from 'react';
import {Stack, IconButton, TextField} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export default function LearningObjectiveTextbox(props){
    const [value, setValue] =useState("");

    React.useEffect(() => {
        if(value.length === 0){
            setValue(props.val);
        }
    }, [value])

    React.useEffect(() => {
        props.updateLearningObjectives(value);
    }, [value])

    return(
        <Stack direction="row" spacing={2} mt={2}>
                <TextField 
                    sx={{width:'100%'}} 
                    value={value} 
                    label="New Objective" 
                    variant="outlined" 
                    size="small" 
                    onChange={(e) => {setValue(e.target.value)}}/>
                <IconButton onClick={() => {props.handleRemove(props.loIndex)}}>    
                    <CancelIcon/>
                </IconButton>
        </Stack>
    )
}