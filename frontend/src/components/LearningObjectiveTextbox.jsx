import React, {useState} from 'react';
import {Stack, IconButton, TextField, Box} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export default function LearningObjectiveTextbox(props){

    return(
        <Stack direction="row" spacing={2} mt={2}>
                <TextField 
                    sx={{width:'100%'}} 
                    value={props.val} 
                    label="New Objective" 
                    variant="outlined" 
                    size="small" 
                    inputProps={{readOnly:props.isReadyOnly}}
                    onChange={(e) => {
                        props.updateLearningObjectiveObject({id:props.aId, value:e.target.value})
                    }}/>
                    {!props.isReadyOnly ?
                        <IconButton onClick={() => {props.handleRemove(props.loIndex)}}>    
                            <CancelIcon/>
                        </IconButton>
                    :
                    <Box></Box>
                    }
        </Stack>
    )
}