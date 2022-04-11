import React, {useState} from "react";
import {
    Box, 
    Stack, 
    Typography, 
    TextField, 
    InputLabel, 
    Select, 
    MenuItem, 
    FormControl, 
    Button
} from '@mui/material';
import LearningObjectiveTextbox from './LearningObjectiveTextbox';
import FileUpload from './FileUpload';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function CourseDetails(props){
    // These states are all used to handle the Learning Objective fields
    const [learningObjectives, setLearningObjectives] = useState([{id:0, value:''}]);
    let useRefArray = React.useRef([]);
    const [arrayDOMElements, setArrayDOMElements] = useState(useRefArray.current);
    //const [learningObjectiveValue, setLearningObjectiveValue] = useState(learningObjectives.map((lo) => ""));

    const updateLearningObjectives = (lo) => {
        console.log("Learning Objective Param ",lo);
        let newLo = [{id:lo.id+1, value:lo.value}].concat(learningObjectives);
        console.log("New Lo Array ",newLo);
        setLearningObjectives(newLo);
    }

    // Use effect to watch the aray of learning objectives and update the UI when new fields are added
    React.useEffect(() => {
        useRefArray.current = learningObjectives.map((a) => {
            const i = learningObjectives.indexOf(a);
            return(
                <LearningObjectiveTextbox 
                    handleRemove={() => {handleRemove(i)}} 
                    loIndex={i}
                    val={a.value}
                    updateLearningObjectives={updateLearningObjectives}
                    los={learningObjectives}
                    aId={a.id}
                    key={a.id}/>
            );
        });
        setArrayDOMElements(useRefArray.current);
    }, [learningObjectives]);

    React.useEffect(() => {
        console.log("Learning Objectives: ",learningObjectives);
    }, [learningObjectives])
    
    // Fields
    const [courseTitle, setCourseTitle] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseLength, setCourseLength] = useState(0);
    const [contentIcons, setContentIcons] = useState([]);
    const [targetAudience, setTargetAudience] = useState("");
    const [courseSpaces, setCourseSpaces] = useState(0);
    const [courseThumbnail, setCourseThumbnail] = useState();
    const [courseThumbnailName, setCourseThumbnailName] = useState("notfound.svg");
    const [selfDirectedLearning, setSelfDirectedLearning] = useState();
    const [selfDirectedLearningName, setSelfDirectedLearningName] = useState("notfound.svg");

    const navigate = useNavigate();

    React.useEffect(() => {
        if(props.course !== undefined){
            setCourseTitle(props.course.courseTitle);
            setCourseDescription(props.course.courseDescription);
            setCourseLength(props.course.courseLength);
            setTargetAudience(props.course.courseAudience);
            setCourseSpaces(props.course.courseSpaces);
            setCourseThumbnailName(props.course.courseThumbnail);
            setSelfDirectedLearningName(props.course.selfDirectedLearning);
        }
    }, [])

    // Validation for the number inputs to only allow numbers between 0 & 100
    const handleNumberInput = (e, setState) => {
        const val = parseInt(e.target.value);
        console.log(e.target.value.toString());
        if(e.target.value.toString() === "" || !isNaN(val) && val <= 100){
            setState(val);
        }
    }

    // Function to handle the deletion of a learning objective field
    const handleRemove = (i) => {
        console.log("Learning Objectives", learningObjectives);
        let arr = learningObjectives.slice();
        arr.splice(i, 1);
        console.log("New array", arr);
        console.log("The index of i",i)
        setLearningObjectives(arr);
    }

    // Function to create new learning objective fields
    const addLine = () => {
        const ids = learningObjectives.map((lo) => lo.id);
        const unique = learningObjectives.length > 0 ? Math.max(...ids) : -1;
        let arr = [{id:unique + 1, value:'terst' }].concat(learningObjectives);
        setLearningObjectives(arr);
    }

    const getImage = (image, name) => {
        console.log("||| Key: ", name, "||| Image: ", image);

        if(name === "thumbnail"){
            setCourseThumbnail(image);
        }
        else if(name === "learning"){
            setSelfDirectedLearning(image);
        }

    }

    const sendImages = (image) => {
        console.log("Image Name", image);
        const formData = new FormData();
        formData.append('image',image, image.name);
        return axios.post("/upload/images",formData);
    }

    const saveCourse = (courseState) => {
        let thumbnailName = "";
        let learningName = "";
        const thumbnail = sendImages(courseThumbnail).then(res => {
            thumbnailName = res.data.uploadedFilename;
            sendImages(selfDirectedLearning).then(res => {
                learningName = res.data.uploadedFilename;

                learningObjectives.map((a) => {
                    console.log(a);
                });

                axios.post('/course/new',{
                    title: courseTitle,
                    description: courseDescription,
                    audience: targetAudience,
                    icons: contentIcons,
                    length: courseLength,
                    spaces: courseSpaces,
                    state: courseState,
                    thumbnail:thumbnailName ,
                    directedLearning: learningName
                })
                .then(function(response) {
                    console.log(response);
                    navigate('/admin');
                }).then(function(error){
                    console.log(error);
                })
            });
            
        });
    }

    return(
        <Stack direction="row" spacing={4}>
            <Box sx={{width:'100%'}}>
                <Stack direction="column" sx={{marginTop:4}} spacing={2}>
                        <TextField 
                            label="Course Title" 
                            variant="outlined" 
                            value={courseTitle} 
                            onChange={(e) => {setCourseTitle(e.target.value)}} 
                            inputProps={{readOnly:props.isReadyOnly}}/>
                        <TextField 
                            label="Course Description" 
                            multiline 
                            rows={4} 
                            maxRows={4} 
                            variant="outlined"
                            value={courseDescription} 
                            onChange={(e) => {setCourseDescription(e.target.value)}}
                            inputProps={{readOnly:props.isReadyOnly}}/>
                    </Stack>
                        <Stack direction="row" alignItems="flex-end" spacing={2} mt={2}>
                            <Stack>
                                <FormControl>
                                    <InputLabel id="target-audience-label">Target Audience</InputLabel>
                                    <Select 
                                        inputProps={{readOnly:props.isReadyOnly}}
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
                                    InputProps={{ inputProps:{type:'number', min:0, max:100, readOnly:props.isReadyOnly } }}  
                                    value={courseLength} 
                                    onChange={(e) => {handleNumberInput(e, setCourseLength)}}/>
                        </Stack>

                            <Stack direction="row" alignItems="flex-end" spacing={2} mt={2}>
                                <Stack>
                                    <FormControl>
                                        <InputLabel id="content-icons-label">Content Icons</InputLabel>
                                        <Select 
                                            inputProps={{readOnly:props.isReadyOnly}}
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
                                    InputProps={{ inputProps:{type:'number', min:0, max:100, readOnly:props.isReadyOnly } }}  
                                    value={courseSpaces} 
                                    onChange={(e) => {handleNumberInput(e, setCourseSpaces)}}/>
                            </Stack>

                        <Stack mt={2}>
                            <Typography variant="body1">Learning Objectives</Typography>
                            <Stack spacing={2}>    
                                {arrayDOMElements}
                            </Stack>

                            
                            <Button 
                                sx={{
                                    width:'fit-content', 
                                    marginLeft:"auto", 
                                    marginTop:2, 
                                    marginRight:"55px"
                                }} 
                                variant="contained" 
                                onClick={addLine}
                                inputProps={{readOnly:props.isReadyOnly}}>
                                    Add Line
                                </Button>
                </Stack>
            </Box>
            <Box>
                <Stack>  
                    <Typography variant="h6" mt={2}>Course Thumbnail</Typography>
                    {!props.isReadyOnly ? 
                    <FileUpload setImage={(image, key) => {getImage(image, key)}} name="thumbnail"/>
                    :
                    <Box component="img" src={require("../../../backend/uploads/"+courseThumbnailName)} sx={{height:300, width:300}}/>
                    }
                    <Typography variant="h6" mt={2}>Self Directed Learning</Typography>
                    {!props.isReadyOnly ? 
                    <FileUpload setImage={(image, key) => {getImage(image, key)}} name="learning"/>
                    :
                    <Box component="img" src={require("../../../backend/uploads/"+selfDirectedLearningName)} sx={{height:300, width:300}}/>
                    }
                    
                </Stack>
                {!props.isReadyOnly ?
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={() => {saveCourse("Published")}} sx={{height:'fit-content'}}>Publish</Button>
                    <Button variant="contained" onClick={() => {saveCourse("Draft")}} sx={{height:'fit-content', minWidth:'max-content'}}>Save As Draft</Button>
                    <Button variant="contained" sx={{height:'fit-content'}}>Discard</Button>
                </Stack>
                :
                <Box></Box>
                }
            </Box>
        </Stack>
    )
}