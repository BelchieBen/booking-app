import React from 'react';
import {Box, Stack, Typography, Divider} from '@mui/material';
import Logo from '../utils/images/Ideagen.svg';

export default function PageHeader(props) {
    return(
        <Box>
            {/* Header Section */}
            <Stack direction="row" justifyContent="space-between">
                <Stack spacing={2}>
                    <Typography variant="subtitle2">{props.subtitle}</Typography>
                    <Typography variant="h6">{props.title}</Typography>
                </Stack>
                    <Box 
                        component="img" 
                        sx={{
                            width:250
                        }}
                        src={Logo}
                    />
                </Stack>
            <Divider />
        </Box>
    )
}