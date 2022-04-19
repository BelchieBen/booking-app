import Article from '../utils/images/content-images/Article.svg'
import EBook from '../utils/images/content-images/EBook.svg'
import ELearning from '../utils/images/content-images/ELearning.svg'
import FaceToFace from '../utils/images/content-images/FaceToFace.svg'
import Online from '../utils/images/content-images/Online.svg'
import Podcast from '../utils/images/content-images/Podcast.svg'
import TopTips from '../utils/images/content-images/TopTips.svg'
import Video from '../utils/images/content-images/Video.svg'

import * as React from 'react';
import {Box, Stack} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function EditableTable(props) {
  return (
    <Box
      sx={{
        height: 400,
        width: 1
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        isCellEditable={props.isReadyOnly}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

const columns = [
    { 
        field: 'content', 
        headerName: 'Content',
        renderCell: (params) => {
          return(
            <Stack direction="row" sx={{alignItems:"center"}}>
              <Box component="img" sx={{height:30, width:30, marginRight:2}} src={params.value.icon} />
              {params.value.contentType}
            </Stack>
          )
        },
        flex:1, 
        editable: true,
        sortComparator: (v1, v2) => v1.contentType.localeCompare(v2.contentType)
    },
    { 
        field: 'title', 
        headerName: 'Title', 
        flex:1, 
        editable: true 
    },
    {
        field: 'source',
        headerName: 'Source',
        flex:1, 
        editable: true,
    },
    {
        field: 'duration',
        headerName: 'Duration',
        flex:1, 
        editable: true,
    },
];

const rows = [
  {
    id: 1,
    content: { 
      contentType:"Article",
      icon: Article
    },
    title: "The GROW Model of Coaching and Mentoring",
    source: "Mind Tools",
    duration: "9 mins",
  },
  {
    id: 2,
    content: { 
      contentType:"Article",
      icon: Article
    },
    title: "The 5 Essentials to Effective Coaching",
    source: "Entrepreneur.com",
    duration: "5 mins",
  },
  {
    id: 3,
    content: { 
      contentType:"Article",
      icon: Article
    },
    title: "The Key to Effective Coaching",
    source: "Forbes",
    duration: "7 mins",
  },
  {
    id: 4,
    content: { 
      contentType:"Podcast",
      icon: Podcast
    },
    title: "Coaching for Leaders Podcast",
    source: "Dave Stachowiak",
    duration: "Various",
  },
  {
    id: 5,
    content: { 
      contentType:"Podcast",
      icon: Podcast
    },
    title: "Accelerating Growth through Coaching",
    source: "How to be Awesome at Your Job",
    duration: "42 mins",
  },
];