import React, {useState} from 'react';
import {Box, Stack, Typography, TextField, Grid, InputLabel, Select, MenuItem, FormControl, IconButton, Button} from '@mui/material';
import PageHeader from '../PageHeader';
import CourseDetails from '../CourseDetails'

export default function NewCourse(){
    

    return(
        <Box sx={{margin: 2, width:'100%'}}>
            <PageHeader subtitle="New Course" title="New Course"/>
            <CourseDetails />
        </Box>
    )
}