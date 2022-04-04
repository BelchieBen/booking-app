import React, {useState} from "react";
import {Box, Stack, Typography, TextField, Grid, InputLabel, Select, MenuItem, FormControl, IconButton, Button} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import LearningObjectiveTextbox from './LearningObjectiveTextbox';
import FileUpload from './FileUpload';

export default function CourseDetails(props){
    const [targetAudience, setTargetAudience] = useState("");
    const [learningObjectives, setLearningObjectives] = useState([]);
    
    // Fields
    const [courseTitle, setCourseTitle] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseAudience, setCourseAudience] = useState("");
    const [courseLength, setCourseLength] = useState(0);
    const [contentIcons, setContentIcons] = useState([]);
    const [courseSpaces, setCourseSpaces] = useState(0);

    const handleNumberInput = (e, setState) => {
        const val = parseInt(e.target.value);
        console.log(e.target.value.toString());
        if(e.target.value.toString() === "" || !isNaN(val) && val <= 100){
            setState(val);
        }
    }

    React.useEffect(() => {
        console.log(courseSpaces);
    })

    const addLine = () => {
        setLearningObjectives(learningObjectives.concat(<LearningObjectiveTextbox loIndex={learningObjectives.length} key={learningObjectives.length} />));
    }
    return(
        <Stack direction="row" spacing={4}>
            <Box>
                <Stack direction="column" sx={{marginTop:4}} spacing={2}>
                        <TextField label="Course Title" variant="outlined" value={courseTitle} onChange={(e) => {setCourseTitle(e.target.value)}}/>
                        <TextField label="Course Description" multiline rows={4} maxRows={4} variant="outlined" value={courseDescription} onChange={(e) => {setCourseDescription(e.target.value)}}/>
                    </Stack>
                        <Stack direction="row" alignItems="flex-end" spacing={2} mt={2}>
                            <Stack>
                                <FormControl>
                                    <InputLabel id="target-audience-label">Target Audience</InputLabel>
                                    <Select 
                                        labelId="target-audience-label"
                                        label="Target Audience"
                                        value={targetAudience}
                                        onChange={(e) => {setTargetAudience(e.target.value)}}
                                        sx={{minWidth:200, width:'100%'}}>
                                            <MenuItem value="Testing Filter">Target Audience</MenuItem>
                                    </Select>
                                        </FormControl>
                            </Stack>
                                <TextField 
                                    label="Course Length" 
                                    variant="outlined" 
                                    InputProps={{ inputProps:{type:'number', min:0, max:100 } }}  
                                    value={courseLength} 
                                    onChange={(e) => {handleNumberInput(e, setCourseLength)}}/>
                        </Stack>

                            <Stack direction="row" alignItems="flex-end" spacing={2} mt={2}>
                                <Stack>
                                    <FormControl>
                                        <InputLabel id="content-icons-label">Content Icons</InputLabel>
                                        <Select 
                                            labelId="content-icons-label"
                                            label="Content Icons"
                                            value={contentIcons}
                                            onChange={(e) => {setContentIcons(e.target.value)}}
                                            sx={{minWidth:200, width:'100%'}}>
                                                <MenuItem value="Testing Filter">Icon</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>

                                <TextField 
                                    label="Available Spaces" 
                                    variant="outlined" 
                                    InputProps={{ inputProps:{type:'number', min:0, max:100 } }}  
                                    value={courseSpaces} 
                                    onChange={(e) => {handleNumberInput(e, setCourseSpaces)}}/>
                            </Stack>

                        <Stack mt={2}>
                            <Typography variant="body1">Learning Objectives</Typography>
                            <Stack spacing={2}>    
                                {learningObjectives}
                                {console.log(learningObjectives)}
                            </Stack>

                            
                            <Button sx={{width:'fit-content', marginLeft:"auto", marginTop:2, marginRight:"55px",}} variant="contained" onClick={addLine}>Add Line</Button>
                </Stack>
            </Box>
            <Box>
                <Stack>  
                    <Typography variant="h6">Course Thumbnail</Typography>
                    <FileUpload />
                </Stack>
            </Box>
        </Stack>
    )
}