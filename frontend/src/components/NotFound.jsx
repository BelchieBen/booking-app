import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import NotFoundIcon from '../utils/images/NotFoundIcon.svg'

export default function NotFound(props){
    return(
        <Stack spacing={2}>
            <Box
                component="img"
                src={NotFoundIcon}
                height={200}/>
            <Typography variant="h5" align="center">{props.text}</Typography>
        </Stack>
    )
}