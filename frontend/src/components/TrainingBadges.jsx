import React from 'react';
import BookingList from './BookingList';
import {Box, Stack, List, Button, Avatar, ListItem, ListItemAvatar, ListItemText, Paper, Typography, styled } from '@mui/material'
import QMS from '../utils/images/QMS.png';

const n = 8;
const StyledPaper = styled(Paper)({borderRadius:10, margin:6, scrollbarWidth: 1, maxWidth:'100%', overflow: 'auto'});

export default function TrainingBadges(props){
    return(
        <Box sx={{ width:'100%', marginTop:4}}>
            <Typography variant="h6">Badges</Typography>
            <StyledPaper className="StyledPaper" justify="center">
            <List component={Stack} direction="row" className="scroll-list" sx={{ width:'100%'}}>
                {[...Array(n)].map(data => (
                    <ListItem
                        sx={{minWidth:'500px'}}
                        secondaryAction={
                            <Button edge="end" variant="text">{props.buttonText}</Button>
                        }
                    >
                    <ListItemAvatar>
                        <Box component="img" src={QMS} sx={{width:'100px', height:'100px', borderRadius:12}}/>
                    </ListItemAvatar>
                    <ListItemText
                    primary={props.primaryText}
                    secondary={props.secondaryText}
                    />
                </ListItem>
                ))}
            </List>
            </StyledPaper>
        </Box>
    )
}