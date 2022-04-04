import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Stack, Typography, Checkbox, FormGroup, FormControlLabel, Select, MenuItem, TextField, InputAdornment, FormControl, InputLabel, Button  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PageHeader from '../PageHeader';
import CourseCard from '../CourseCard';
import Planning from '../../utils/images/Planning.png';

const testCourses = [
    {
        image: Planning,
        text: "Testing Course",
        description: "Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description ",
        pathwayTag: "Learning Pathway Tag",
    },
    {
        image: Planning,
        text: "Testing Course 2",
        description: "Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description ",
        pathwayTag: "Learning Pathway Tag",
    },
    {
        image: Planning,
        text: "Testing Course 3",
        description: "Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description ",
        pathwayTag: "Learning Pathway Tag",
    },
    {
        image: Planning,
        text: "Testing Course 4",
        description: "Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description Testing Course Description ",
        pathwayTag: "Learning Pathway Tag",
    }
];

export default function AdminDashboard(){
    const [courseTypeFilter, setCourseTypeFilter] = useState("");
    const [courseFilter, setCourseFilter] = useState("");
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url);
    }
    return(
        <Box sx={{margin: 2, width:'100%'}}>
            <PageHeader subtitle="Courses" title="Courses"/>
            <Stack direction="row" sx={{marginTop:2}}>
                <FormGroup sx={{width:'50%'}}>
                    <FormControlLabel control={<Checkbox />} label="Published Courses" />
                </FormGroup>
                <Select 
                    size="small"
                    value={courseTypeFilter}
                    onChange={(e) => {setCourseTypeFilter(e.target.value)}}
                    sx={{minWidth:100, width:'100%'}}>
                        <MenuItem value="Draft">Draft</MenuItem>
                    </Select>
            </Stack>
            <Stack direction="row" spacing={6}  sx={{marginTop:6}} justifyContent="space-between">
                <TextField
                    varient="outlined"
                    size="small"
                    placeholder="Search..."
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    }}
                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>
                <FormControl>
                <InputLabel size="small" id="course-filter-label">Filters</InputLabel>
                    <Select 
                        size="small"
                        labelId="course-filter-label"
                        label="Filters"
                        value={courseFilter}
                        onChange={(e) => {setCourseFilter(e.target.value)}}
                        sx={{minWidth:200, width:'100%'}}>
                            <MenuItem value="Testing Filter">Testing Filter</MenuItem>
                        </Select>
                </FormControl>
                <Button variant="contained" onClick={() => {handleNavigate("/course/new")}}>Add A New Course</Button>
                
            </Stack>

            <Stack spacing={4} sx={{marginTop:4}}>
                {testCourses.map((value, index) => (   
                    <CourseCard image={value.image} title={value.text} description={value.description} pathwayTag={value.pathwayTag}/>
                ))}
            </Stack>

        </Box>
    )
}