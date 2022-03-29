import React from 'react';
import {Box, Stack, List, Button, Avatar, ListItem, ListItemAvatar, ListItemText, Paper, styled } from '@mui/material'
import CompanyNews from '../utils/images/CompanyNews.png'; 

const n = 8;
const StyledPaper = styled(Paper)({borderRadius:10, margin:6, scrollbarWidth: "none"});

export default function BookingList(props){
    return(
        <StyledPaper style={{maxHeight:400, overflow: 'auto'}} className="StyledPaper">
            <List>
                {[...Array(n)].map(data => (
                    <ListItem
                    secondaryAction={
                        <Button edge="end" variant="text">{props.buttonText}</Button>
                    }
                    >
                    <ListItemAvatar>
                    <Avatar src={CompanyNews}>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                    primary={props.primaryText}
                    secondary={props.secondaryText}
                    />
                </ListItem>
                ))}
            </List>
        </StyledPaper>
    )
}