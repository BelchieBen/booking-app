import React from 'react';
import {Typography, ListItemText, ListItemButton, List, Collapse, Box, Stack, ListItem} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Learners from '../utils/images/Learners.svg'

const data = ["Course Title", "Another Course Title", "Course", "Course"];

export default function CompletedCourses(props){
    const [openIndex, setOpenIndex] = React.useState();
    const handleClick = (index) => {
        if(index == openIndex){
            setOpenIndex(undefined);
            return;
        }
        setOpenIndex(index);
      };
    return(
        <Box sx={{marginTop:4}}>
            <Typography variant="h6">Courses Completed</Typography>
            <Stack direction="row" justifyContent="space-between">    
                <Typography variant="body2">Course Title</Typography>
                <Typography variant="body2">Date Completed</Typography>
            </Stack>
            <List sx={{width:'100%'}}>
                {data.map((value, index) => (
                    <Box key={index}>
                        <ListItem 
                            secondaryAction={
                                <ListItemText primary="21/01/2022" />
                            }>
                        <ListItemButton onClick={() => {handleClick(index)}}>  
                            {openIndex == index ? <ExpandLess /> : <ExpandMore />}
                            <ListItemText primary={value} />
                        </ListItemButton>
                        
                        </ListItem>
                        <Collapse in={openIndex == index} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <Box component="img" src={Learners} sx={{width:'100px', height:'100px'}} />
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                            </List>
                        </Collapse>
                    </Box>
                ))}
            </List>
        </Box>

    )
}