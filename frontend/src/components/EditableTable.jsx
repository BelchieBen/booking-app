import Article from '../utils/images/content-images/Article.svg'
import EBook from '../utils/images/content-images/EBook.svg'
import ELearning from '../utils/images/content-images/ELearning.svg'
import FaceToFace from '../utils/images/content-images/FaceToFace.svg'
import Online from '../utils/images/content-images/Online.svg'
import Podcast from '../utils/images/content-images/Podcast.svg'
import TopTips from '../utils/images/content-images/TopTips.svg'
import Video from '../utils/images/content-images/Video.svg'

import * as React from 'react';
import {Box, Stack, Select, MenuItem, FormControl, Link} from '@mui/material';
import { DataGrid, useGridApiContext  } from '@mui/x-data-grid';
import Dropdown from './Dropdown';

// Test Data
const contentTypes = [
  {
      item: {
        contentType:"Article",
        icon: Article
      }
  },
  {
      item: {
        contentType:"E-Book",
        icon: EBook
      }
  },
  {
      item: {
       contentType:"E-Learning",
       icon: ELearning
      }
  },
  {
    item: {
      contentType:"Face to Face",
      icon: FaceToFace
    }
  },
  {
    item: {
      contentType:"Online",
      icon: Online
    }
  },
  {
    item: {
      contentType:"Podcast",
      icon: Podcast
    }
  },
  {
    item: {
      contentType:"Top Tips",
      icon: TopTips
    }
  },
  {
    item: {
      contentType:"Video",
      icon: Video
    }
  }
]

function renderContent(params) {
  return(
    <Stack direction="row" sx={{alignItems:"center"}}>
      <Box component="img" sx={{height:30, width:30, marginRight:2}} src={params.value.icon} />
      {params.value.contentType}
    </Stack>
  );
}

function ContentTypeEditInput(props) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = (event, newValue) => {
    apiRef.current.setEditCellValue({ id, field, value: newValue.props.value });
  };

  return (
    <FormControl fullWidth>
        <Select
            id="content-type-select"
            value={value}
            size="small"
            onChange={handleChange}>

        {contentTypes.map(data => (
            <MenuItem value={data.item}>
              <Box component="img" sx={{height:25, width:25, marginRight:2}} src={data.item.icon} />
              {data.item.contentType}
            </MenuItem>
        ))}

        </Select>
    </FormControl>
    );
}

 export default function EditableTable(props) {
  return (
    <Box
      sx={{
        height: 400,
        width: 1
      }}
    >
      <DataGrid
      sx={{cursor: 'pointer'}}
        rows={rows}
        columns={columns}
        isCellEditable={props.isReadyOnly}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

const renderContentTypeEditInput = (params) => {
  return <ContentTypeEditInput {...params} />
}

const columns = [
    { 
        field: 'content', 
        headerName: 'Content',
        renderCell: renderContent,
        renderEditCell: renderContentTypeEditInput,
        flex:0.2, 
        editable: true,
        sortComparator: (v1, v2) => v1.contentType.localeCompare(v2.contentType)
    },
    { 
        field: 'title', 
        headerName: 'Title', 
        renderCell: (params) => {
          return(
            <Link href={params.value.href} target="_blank" rel="noopener noreferrer">{params.value.titleText}</Link>
          )
        },
        flex:0.4,
        editable: true ,
        sortComparator: (v1, v2) => v1.titleText.localeCompare(v2.titleText)
    },
    {
        field: 'source',
        headerName: 'Source',
        flex:0.3, 
        editable: true,
    },
    {
        field: 'duration',
        headerName: 'Duration',
        flex:0.15,
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
