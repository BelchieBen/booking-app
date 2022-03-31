import React, {useState} from 'react';
import PageHeader from '../PageHeader';
import NotFound from '../NotFound';
import UserDetails from '../UserDetails';
import TrainingBadges from '../TrainingBadges';
import CompletedCourses from '../CompletedCourses';
import {Stack, Box, Avatar, Typography, Paper} from '@mui/material';
import LearningPathways from '../LearningPathways';

 export default function LearningRecord(props){
     const [user, setUser] = useState();
     React.useEffect(() => {
         if(typeof user === 'undefined'){
             setUser(props.user);
             console.log("Learning Record: ",user);
         }
     })
     return(
        <Box sx={{margin: 2, width:'100%', overflow: 'hidden'}}>   
        <PageHeader subtitle="Learning Record" title="Learning Record" />
        {!user ? 
            <NotFound />
        : 
            <Box sx={{width:'100%'}}>
                <UserDetails user={user}/>
                <TrainingBadges 
                     primaryText="Training Badge" 
                     secondaryText="Booking info Booking info Booking info Booking info Booking info Booking info Booking info Booking info Booking info "/>
                <CompletedCourses />
                <LearningPathways />
            </Box>
        }
         </Box>
     )
 }