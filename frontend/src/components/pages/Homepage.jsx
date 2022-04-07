import React, {useState} from 'react';
import { Typography, Stack, Box, Select, MenuItem, InputLabel } from '@mui/material';
import Divider from '@mui/material/Divider';
import InfoDialog from '../InfoDialog';
import CompanyNews from '../../utils/images/CompanyNews.png';
import HomepageCard from '../HomepageCard';
import BookingList from '../BookingList';
import NotFound from '../NotFound';
import axios from 'axios';
import PageHeader from '../PageHeader'

// const testData = [
//     {
//         title: "Test",
//         body: "This is the test body This is the test body This is the test body This is the test body",
//         image: CompanyNews,
//         buttonText: "View Course"
//     },
//     {
//         title: "Test 2",
//         body: "This is the test body This is the test body This is the test body This is the test body",
//         image: CompanyNews,
//         buttonText: "View Course"
//     },
//     {
//         title: "Test 3",
//         body: "This is the test body This is the test body This is the test body This is the test body",
//         image: CompanyNews,
//         buttonText: "View Course"
//     },
//     {
//         title: "Test 4",
//         body: "This is the test body This is the test body This is the test body This is the test body",
//         image: CompanyNews,
//         buttonText: "View Course"
//     }
// ]

const roles = [
    {
        role: "Admin",
    },
    {
        role: "Developer",
    },
    {
        role: "Manager",
    }
]

export default function Homepage(){
    const [role, setRole] = useState("");
    const [announcements, setAnnouncements] = useState([]);

    React.useEffect(() => {
        if(announcements.length === 0){
            axios.get('/courses')
            .then((res) => {
                setAnnouncements(res.data.courses);
                console.log("Announcements: ", res);
            })
        }
    }, [])
    return(
        <Box sx={{margin: 2, width:'100%'}}>
            {/* Header Section */}
            <PageHeader subtitle="Homepage" title="Welcome to I-Learn"/>

        {/* New user info popup */}
        <InfoDialog/>

        {/* Annoucements Section */}
        <Typography variant="h6" sx={{marginBottom:2}}>Announcements</Typography>
        {announcements.length <= 0 ? 
            // Display when there are no announcements
            <NotFound text="Looks like there are no announcements for now" /> 
            : 
            // Display the announcements if there are any
            <Stack direction="row" spacing={2}>
            {announcements.map( data => (
                <HomepageCard title={data.courseTitle} body={data.courseDescription} image={data.courseThumbnail} buttonText="View"/>
            ))}
            </Stack>
        }
        {/* Your Feed Seciton */}
        <Typography variant="h6" sx={{marginBottom:2, marginTop:4, borderRadius:12}}>Your Feed</Typography>
        <Stack sx={{maxWidth: "150px", marginLeft:"auto"}}>
            <InputLabel id="Filter-by-role-id">Filter by role</InputLabel>
            <Select 
                size="small"
                labelId="Filter-by-role-id"
                value={role}
                onChange={(e) => {setRole(e.target.value)}}
                sx={{minWidth:100}}>
            
            {roles.map(data => (
                <MenuItem value={data.role}>{data.role}</MenuItem>
            ))}

            </Select>
        </Stack>
        <BookingList 
            primaryText="Booking Submitted" 
            secondaryText="Booking info Booking info Booking info Booking info Booking info Booking info Booking info Booking info Booking info "
            buttonText="View Bookings"/>
        </Box>
    )
}