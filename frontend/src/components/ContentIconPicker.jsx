import React, {useState} from 'react'
import {List, Paper, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, InputLabel, Box, Chip, Stack, IconButton} from '@mui/material'
import Article from '../utils/images/content-images/Article.svg'
import EBook from '../utils/images/content-images/EBook.svg'
import ELearning from '../utils/images/content-images/ELearning.svg'
import FaceToFace from '../utils/images/content-images/FaceToFace.svg'
import Online from '../utils/images/content-images/Online.svg'
import Podcast from '../utils/images/content-images/Podcast.svg'
import TopTips from '../utils/images/content-images/TopTips.svg'
import Video from '../utils/images/content-images/Video.svg'

const icons = [
    {id:0, name:'Article', icon:Article},
    {id:1, name:'E-Book', icon:EBook},
    {id:2, name:'E-Learning', icon:ELearning},
    {id:3, name:'Face to Face', icon:FaceToFace},
    {id:4, name:'Online', icon:Online},
    {id:5, name:'Podcast', icon:Podcast},
    {id:6, name:'Top Tips', icon:TopTips},
    {id:7, name:'Video', icon:Video},
]

export default function ContentIconPicker(props) {
    const [selected, setSelected] = useState([]);
    let useRefArray = React.useRef([]);
    const [chips, setChips] = React.useState(useRefArray.current);

    React.useEffect(() => {
        useRefArray.current = selected.map((a) => {
            const i = selected.indexOf(a);
            return(
                <Box component="img" src={a.icon} key={i} sx={{height:35, width:35, marginRight:1}}/>
            );
        });
        setChips(useRefArray.current);
      }, [selected])

    const handleToggle = (value) => () => {
        const currentIndex = selected.indexOf(value);
        const newChecked = [...selected];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        console.log(newChecked);
        setSelected(newChecked);
      };

    return(
        <Stack>
            <Box sx={{marginBottom:2}}>   
                {chips}
            </Box>
        <Box>
            <InputLabel id="content-icon-label" style={{marginLeft: "0.6em", marginTop: "-0.7em", paddingLeft: "0.44em", paddingRight:'0.44em', zIndex: 2,  position: "absolute", backgroundColor:'white',fontSize: "0.8rem", lineHeight: '1.4375em'}}>Target Audience</InputLabel>
            <Paper variant="outlined" elevation={0} style={{maxHeight:200, minWidth:250, maxWidth:250, overflow: 'auto', scrollbarWidth: "none"}}>
                <List>
                {icons.map((value) => {
                    const labelId = `checkbox-list-label-${value.id}`;

                    return (
                    <ListItem
                        key={value.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                              <Box component="img" src={value.icon} sx={{height:25, width:25}}/>
                            </IconButton>
                          }
                        disablePadding>
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selected.indexOf(value) !== -1}       
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}/>
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${value.name}`} />
                        </ListItemButton>
                    </ListItem>
                    );
                })}

                </List>
            </Paper>
        </Box>
        </Stack>
    )
}