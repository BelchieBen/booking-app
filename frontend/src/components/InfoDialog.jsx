import React, {useState} from 'react';
import {Box, Typography, Button, Stack} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

export default function InfoDialog(){
    const [close, setClose] = useState(false);

    React.useEffect(() => {
        if(close === true) {
            return(
                <Box></Box>
            )
        }
    }, [close])
    return(
        <Box sx={{
            backgroundColor: 'rgb(228, 252, 255)',
            borderRadius:4,
            padding:1.5,
            margin:4
            }}>
            <Stack direction="row" justifyContent="space-between">
                <Stack>
                    <Typography variant="subtitle1">First time here, got any questions?</Typography>
                    <Typography variant="subtitle1">Read our FAQ to answer some common questions!</Typography> 
                </Stack>
                <Stack direction="row">     
                    <Button variant="contained">FAQ</Button>
                    <IconButton onClick={() => {
                        setClose(true);
                    }}>
                        <ClearIcon/>
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}