import React, {useState} from 'react';
import {Formik, getIn} from 'formik';
import * as Yup from 'yup';
import {
    TextField, 
    Button, 
    Stack,
    FormControl,
    Select, 
    MenuItem, 
    Box,
    InputLabel ,
    FormHelperText
} from '@mui/material';
import Article from '../utils/images/content-images/Article.svg'
import EBook from '../utils/images/content-images/EBook.svg'
import ELearning from '../utils/images/content-images/ELearning.svg'
import FaceToFace from '../utils/images/content-images/FaceToFace.svg'
import Online from '../utils/images/content-images/Online.svg'
import Podcast from '../utils/images/content-images/Podcast.svg'
import TopTips from '../utils/images/content-images/TopTips.svg'
import Video from '../utils/images/content-images/Video.svg'

// Test Data to populate the dropdown for different content types
const contentTypes = [
    {
        item: {
          contentType:"Article",
          icon: Article
        }
    },
    {
        item: {
          contentType:"E-Book",
          icon: EBook
        }
    },
    {
        item: {
         contentType:"E-Learning",
         icon: ELearning
        }
    },
    {
      item: {
        contentType:"Face to Face",
        icon: FaceToFace
      }
    },
    {
      item: {
        contentType:"Online",
        icon: Online
      }
    },
    {
      item: {
        contentType:"Podcast",
        icon: Podcast
      }
    },
    {
      item: {
        contentType:"Top Tips",
        icon: TopTips
      }
    },
    {
      item: {
        contentType:"Video",
        icon: Video
      }
    }
  ]


export default function SelfDirectedLearningForm() {
    // Error states for each input
    const [linkErrorState, setLinkErrorState] = useState(false);
    const [displayTextErrorState, setDisplayTextErrorState] = useState(false);
    const [contentErrorState, setContentErrorState] = useState(false);
    const [sourceErrorState, setSourceErrorState] = useState(false);
    const [durationErrorState, setDurationErrorState] = useState(false);

    // Helper text's for each input
    const [linkHelperText, setLinkHelperText] = useState("");
    const [displayTextHelperText, setDisplayTextHelperText] = useState("");
    const [sourceHelperText, setSourceHelperText] = useState("");
    const [durationHelperText, setDurationHelperText] = useState("");

    // Setting the helper text's for whichever input is in an error state
    React.useEffect(() => {
        if(displayTextErrorState) {
            setDisplayTextHelperText("Please enter some text to display"); 
            return;
        }
        if(linkErrorState){
            setLinkHelperText("Please enter a link to display");
            return;
        }
        if(sourceErrorState){
            setSourceHelperText("Please enter a source");
            return;
        }
        if(durationErrorState){
            setDurationHelperText("Please enter a duration");
            return;
        }
        // Resetting the helper text once error in field has been corrected
        setDisplayTextHelperText(null);
        setLinkHelperText(null);
        setSourceHelperText(null);
        setDurationHelperText(null);
    })

    return(
        <Formik
            initialValues={{
                title: { 
                    displayText:"", 
                    link:"",
                },
                content:{
                    contentType:"",
                    icon:null
                },
                source:"",
                duration:"",
            }}
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
                title: Yup.object().shape({
                    displayText: Yup.string()
                        .required("Required"),
                    link: Yup.string()
                        .required("Required"),
                }),
                content:Yup.object().shape({
                    contentType: Yup.string()
                        .required("Required"),
                    icon: Yup.mixed()
                        .required("Required"),
                }),
                source:Yup.string()
                    .required("Required"),
                duration:Yup.string()
                    .required("Required"),
            })}>
                {props => {
                const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset
                } = props;

                return(
                    <form onSubmit={handleSubmit}>
                        <Stack sx={{margin:2}} direction="column" spacing={2}>

                        {/* The dropdown for the content type */}
                        <FormControl fullWidth error={contentErrorState}>
                            <InputLabel id="content-select-id" size="small">Content Type</InputLabel>
                            <Select
                                labelId="content-select-id"
                                name="content"
                                id="content"
                                label="Content Type"
                                size="small"
                                value={values.content}
                                onChange={handleChange}
                                onBlur={handleBlur}>

                            {contentTypes.map(data => (
                                <MenuItem value={data.item}>
                                <Box component="img" sx={{height:25, width:25, marginRight:2}} src={data.item.icon} />
                                {data.item.contentType}
                                </MenuItem>
                            ))}

                            </Select>
                            {contentErrorState? <FormHelperText>Please select a content type</FormHelperText>: <></>}
                            
                        </FormControl>
                        {errors.content && touched.content ? setContentErrorState(true): setContentErrorState(false)}

                            {/* The title text fields for the link and display text */}
                            <Stack direction="row">
                            <TextField
                                    error={linkErrorState}
                                    name="title.link"
                                    size="small"
                                    label="Link"
                                    variant="outlined"
                                    id="link"
                                    helperText={linkHelperText}
                                    placeholder="Link to resource"
                                    type="text"
                                    value={values.link}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            
                                {getIn(errors, 'title.link') && getIn(touched, 'title.link')? setLinkErrorState(true): setLinkErrorState(false)}
                                <TextField
                                    error={displayTextErrorState}
                                    size="small"
                                    label="Display Text"
                                    name="title.displayText"
                                    variant="outlined"
                                    id="displayText"
                                    helperText={displayTextHelperText}
                                    placeholder="Enter the text to display"
                                    type="text"
                                    value={values.displayText}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            
                                {getIn(errors, 'title.displayText') && getIn(touched, 'title.displayText') ? setDisplayTextErrorState(true): setDisplayTextErrorState(false)}

                            </Stack>
                                
                            {/* Text field for the source */}
                            <TextField
                                error={sourceErrorState}
                                name="source"
                                size="small"
                                label="Source"
                                variant="outlined"
                                id="source"
                                helperText={sourceHelperText}
                                placeholder="Enter a source"
                                type="text"
                                value={values.source}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            
                                {errors.source && touched.source? setSourceErrorState(true): setSourceErrorState(false)}

                            {/* Text field for duration */}
                            <TextField
                                error={durationErrorState}
                                name="duration"
                                size="small"
                                label="Duration"
                                variant="outlined"
                                id="duration"
                                helperText={durationHelperText}
                                placeholder="Enter a duration"
                                type="text"
                                value={values.duration}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            
                                {errors.duration && touched.duration? setDurationErrorState(true): setDurationErrorState(false)}

                        <Button variant="contained" color="success" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                        </Stack>
                    </form>
                );
                }}
            </Formik>
    )
}