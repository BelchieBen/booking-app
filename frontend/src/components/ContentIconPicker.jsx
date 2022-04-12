import React, {useState} from 'react'
import {List, Paper, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, FormControl, InputLabel, Box} from '@mui/material'

const icons = [
    "Icon1",
    "Icon2",
    "Icon3",
    "Icon4",
    "Icon5",
]

export default function ContentIconPicker(props) {
    const [selected, setSelected] = useState([{id:0, value:'    '}]);

    const handleToggle = (value) => () => {
        console.log("Toggled value: ",value)
        const currentIndex = selected.indexOf(value);
        const newChecked = [...selected];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setSelected(newChecked);
      };

    return(
        <Box>
            <InputLabel id="content-icon-label" style={{marginLeft: "0.6em", marginTop: "-0.7em", paddingLeft: "0.44em", paddingRight:'0.44em', zIndex: 2,  position: "absolute", backgroundColor:'white',fontSize: "0.8rem", lineHeight: '1.4375em'}}>Target Audience</InputLabel>
            <Paper variant="outlined" elevation style={{maxHeight:200, minWidth:200, overflow: 'auto', scrollbarWidth: "none"}}>
                <List>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem
                        key={value}
                        disablePadding>
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                edge="start"
                                selected={selected.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}/>
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                        </ListItemButton>
                    </ListItem>
                    );
                })}

                </List>
            </Paper>
        </Box>
    )
}