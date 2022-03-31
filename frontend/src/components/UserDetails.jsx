import React, {useState} from 'react';
import NotFound from './NotFound';
import {Stack, Box, Avatar, Typography, Paper} from '@mui/material';

export default function UserDetails(props) {
    const [user, setUser]  =useState();

    React.useEffect(() => {
        if(typeof(user) === 'undefined') {
            setUser(props.user);
        }
    })

    return(
        <Box>
        {!user ?
            <NotFound text="No user was found" />
            :
            <Stack direction="row" spacing={2}  sx={{marginTop:2}}>
                <Box component="img" src={user.imageUrl} sx={{width:'150px', height:'150px', borderRadius:12}}/>
                <Paper component={Stack} elevation={0} direction="column" spacing={2} justifyContent="center">
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="h6">{user.email}</Typography>
                    <Typography variant="h6">{user.googleId}</Typography>
                </Paper>
            </Stack>
        }
        </Box>
    )
}