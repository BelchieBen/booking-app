import React from 'react';
import {Typography, ListItemText, ListItemButton, List, Collapse, Box, Stack, ListItem, LinearProgress, Grid, Paper } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Instructors from '../utils/images/Instructors.svg';
import EqualityDiversity from '../utils/images/EqualityDiversity.png';
import Milestones from './Milestones';

const data = ["Learning Pathway", "Learning Pathway", "Learning Pathway", "Learning Pathway"];

export default function LearningPathways(props){
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
            <Typography variant="h6">Learning Pathways</Typography>
            <Stack direction="row" justifyContent="space-between">    
                <Typography variant="body2">Learning Pathway</Typography>
                <Typography variant="body2">Progress</Typography>
            </Stack>
            <List sx={{width:'100%'}}>
                {data.map((value, index) => (
                    <Box key={index}>
                        <ListItem >
                        <ListItemButton onClick={() => {handleClick(index)}}>  
                            {openIndex == index ? <ExpandLess /> : <ExpandMore />}
                            <ListItemText primary={value} />
                        </ListItemButton>
                        {/* <Switch edge="end" /> */}
                        <Grid sx={{width:'200px'}} edge="end" container>
                            <Grid xs item>
                                <LinearProgress variant="determinate" value={50} />
                            </Grid>
                        </Grid>
                        </ListItem>
                        <Collapse in={openIndex == index} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                                    <Box component="img" src={Instructors} sx={{width:'100px', height:'100px', marginRight:'2em'}} />
                                    <ListItemText primary="Starred Starred Starred Starred Starred Starred Starred" sx={{marginRight:'2em'}}/>
                                    <Milestones />
                                    <Box component="img" src={EqualityDiversity} sx={{width:'100px', height:'100px',marginLeft:'2em', marginRight:'2em'}} />
                                </div>

                            </ListItemButton>
                            </List>
                        </Collapse>
                    </Box>
                ))}
            </List>
        </Box>

    )
}