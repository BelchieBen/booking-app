import React, {useState} from 'react';
import {Box, Stack, Typography, TextField, Grid, InputLabel, Select, MenuItem, FormControl, IconButton, Button} from '@mui/material';
import PageHeader from '../PageHeader';
import CourseDetails from '../CourseDetails'
import axios from 'axios';
import NotFound from '../NotFound';

export default function NewCourse(props){
    const [courseId, setCourseId] = useState(0);
    const [course, setCourse] = useState();
    const getId = () => {
        const url = window.location.href;
        const array = url.split('/');
        let id = array.at(-1);
        setCourseId(id);
    }

    const fetchCourse = () => {
        axios.get('/course/'+courseId)
            .then(res => {
                console.log(res.data.course);
                setCourse(res.data.courseS);
            })
    }

    React.useEffect(() => {
        if(courseId === 0) {
            getId();
        }
    }, [courseId])

    React.useEffect(() => {
        if(courseId !== 0){
            fetchCourse();
        }
        console.log(courseId);
    }, [courseId])

    return(
        <Box sx={{margin: 2, width:'100%'}}>
            {!course ?
            <NotFound text="Course not found"/>
            :
            <Box>
                <PageHeader subtitle={"Course: "+course.courseTitle} title={course.courseTitle}/>
                <CourseDetails course={course} isReadyOnly={true}/>
            </Box>
            }
        </Box>
    )
}