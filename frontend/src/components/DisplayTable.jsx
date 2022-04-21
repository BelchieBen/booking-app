import React, {useState} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Box, 
    Stack,
} from '@mui/material';
import Article from '../utils/images/content-images/Article.svg';
import Podcast from '../utils/images/content-images/Podcast.svg';
import AddSelfDirectedLearningDialog from './AddSelfDirectedLearningDialog';

const rows = [
    {
        id: 1,
        content: {
            contentType:"Article",
            icon: Article
        },
        title: {
            titleText:"The GROW Model of Coaching and Mentoring",
            href: "https://www.mindtools.com/pages/article/newLDR_89.htm",
        },
        source: "Mind Tools",
        duration: "9 mins",
    },
    {
        id: 2,
        content: { 
            contentType:"Article",
            icon: Article
        },
        title: {
            titleText:"The 5 Essentials to Effective Coaching E",
            href: "https://www.entrepreneur.com/article/292877",
        },
        source: "Entrepreneur.com",
        duration: "5 mins",
    },
    {
        id: 3,
        content: { 
            contentType:"Article",
            icon: Article
        },
        title: {
            titleText:"The Key to Effective Coaching",
            href: "https://www.forbes.com/2010/04/28/coaching-talent-development-leadership-managing-ccl.html?sh=1b14b6ca38e0",
        },
        source: "Forbes",
        duration: "7 mins",
    },
    {
        id: 4,
        content: { 
            contentType:"Podcast",
            icon: Podcast
        },
        title: {
            titleText:"Coaching for Leaders Podcast",
            href: "https://coachingforleaders.com/",
        },
        source: "Dave Stachowiak",
        duration: "Various",
    },
    {
        id: 5,
        content: { 
            contentType:"Podcast",
            icon: Podcast
        },
        title: {
            titleText:"Accelerating Growth through Coaching",
            href: "https://awesomeatyourjob.com/631-accelerating-growth-through-coaching-with-andrea-wanerstrand/",
        },
        source: "How to be Awesome at Your Job",
        duration: "42 mins",
    },
  ];

  

export default function DisplayTable(props) {
    const [rows, setRows] = useState([]);
    
    console.log(rows);
    return (
        <Box
            sx={{
                height: 400,
                width: 1, 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end'
            }}
            >
            <AddSelfDirectedLearningDialog titleText="Add self directed learning" buttonText="Add Row" />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {props.columns.map((col) => (   
                                <TableCell>{col.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <Stack direction="row" sx={{alignItems:"center"}}>
                                        <Box component="img" src={row.content.icon} sx={{height:25, width:25, marginRight:2}} />
                                        {row.content.contentType}
                                    </Stack>
                                </TableCell>
                                <TableCell>{row.title.titleText}</TableCell>
                                <TableCell>{row.source}</TableCell>
                                <TableCell>{row.duration}</TableCell>
                                <TableCell>
                                    <Button variant="contained">Edit</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="error">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}