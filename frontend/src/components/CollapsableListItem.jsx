import React, {useState} from 'react';

export default function CollapsableListItem(props){
    const [toggle, setToggle] = useState(false);
    return(
        <Box key={index}>
            <ListItemButton onClick={handleClick(index)}>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Starred" />
                </ListItemButton>
                </List>
            </Collapse>
        </Box>
    )
}