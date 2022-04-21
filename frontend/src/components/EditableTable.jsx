import Article from '../utils/images/content-images/Article.svg'
import EBook from '../utils/images/content-images/EBook.svg'
import ELearning from '../utils/images/content-images/ELearning.svg'
import FaceToFace from '../utils/images/content-images/FaceToFace.svg'
import Online from '../utils/images/content-images/Online.svg'
import Podcast from '../utils/images/content-images/Podcast.svg'
import TopTips from '../utils/images/content-images/TopTips.svg'
import Video from '../utils/images/content-images/Video.svg'
import IInfo from '../utils/images/content-images/IInfo.svg'
import {useState} from 'react';
import { Stack, Select, MenuItem, FormControl, Link, TextField} from '@mui/material';
import Dropdown from './Dropdown';

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid, useGridApiContext, useGridApiRef } from '@mui/x-data-grid';

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

// function EditToolbar(props) {
//   const apiRef = useGridApiContext();
//   const { selectedCellParams, setSelectedCellParams } = props;

//   const handleClick = async () => {
//     if (!selectedCellParams) {
//       return;
//     }
//     const { id, field, cellMode } = selectedCellParams;
//     if (cellMode === 'edit') {
//       apiRef.current.stopCellEditMode({ id, field });
//       setSelectedCellParams({ ...selectedCellParams, cellMode: 'view' });
//     } else {
//       apiRef.current.startCellEditMode({ id, field });
//       setSelectedCellParams({ ...selectedCellParams, cellMode: 'edit' });
//     }
//   };

//   const handleMouseDown = (event) => {
//     // Keep the focus in the cell
//     event.preventDefault();
//   };

//   return (
//     <Box
//       sx={{
//         justifyContent: 'center',
//         display: 'flex',
//         borderBottom: 1,
//         borderColor: 'divider',
//       }}
//     >
//       <Button
//         onClick={handleClick}
//         onMouseDown={handleMouseDown}
//         disabled={!selectedCellParams}
//         color="primary"
//       >
//         {selectedCellParams?.cellMode === 'edit' ? 'Save' : 'Edit'}
//       </Button>
//     </Box>
//   );
// }

// // function EditButton(props){
// //   const { id, value, field } = props;
// //   const apiRef = useGridApiContext();

// //   const handleChange = (event, newValue) => {
// //     apiRef.current.setEditCellValue({ id, field, value: newValue.props.value });
// //   };

// //   return (
    
// //     );
// // }

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

let idCounter = 0;
const createBlankRow = () => {
  idCounter += 1;
  return {id: idCounter, content:{contentType:"Click to add content", icon:IInfo}, title: {titleText:"Click to add title", href:""}, source:"Click to add source", duration:"Click to add duration"};
}

 export default function EditableTable(props) {
  const apiRef = useGridApiRef();
  const [rows, setRows] = useState([
    createBlankRow()
  ]);

  const handleOnRowCommit = async (id) => {
    console.log("I have been called");
    const model = apiRef.current.getEditRowsModel();
    const newRow = model[id]; // The data that will be commited
    const content = newRow.content.value; // The new value entered
    const title = newRow.title.value;
    const duration = newRow.duration.value;
    const source = newRow.source.value;

    console.log("THE NEW ROW! ", newRow);
  }

  const addRow = () => {
    setRows((prevRows) => [...prevRows, createBlankRow()]);
  }
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
      <Button variant="contained" sx={{marginBottom:1}} onClick={addRow}>Add Row</Button>
      <DataGrid
        apiRef={apiRef}
        sx={{
          cursor: 'pointer',
          width: '100%',
        }}
        rows={rows}
        columns={columns}
        onRowEditCommit={handleOnRowCommit}
        editMode="row"
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

const renderContentTypeEditInput = (params) => {
  return <ContentTypeEditInput {...params} />
}

// const columns = [
//     { 
//         field: 'content', 
//         headerName: 'Content',
//         renderCell: renderContent,
//         renderEditCell: renderContentTypeEditInput,
//         flex:0.2, 
//         editable: true,
//         sortComparator: (v1, v2) => v1.contentType.localeCompare(v2.contentType)
//     },
//     { 
//         field: 'title', 
//         headerName: 'Title', 
//         renderCell: (params) => {
//           return(
//             <Link href={params.value.href} target="_blank" rel="noopener noreferrer">{params.value.titleText}</Link>
//           )
//         },
//         renderEditCell: (params) => {
//           return(
//             <Stack direction="row" spacing={2} sx={{margin:2}}>
//               <TextField size="small"  label="Link" variant="outlined"/>
//               <TextField size='small'  label="Display Text" variant="outlined"/>
//             </Stack>
//           )
//         },
//         flex:0.4,
//         editable: true ,
//         sortComparator: (v1, v2) => v1.titleText.localeCompare(v2.titleText)
//     },
//     {
//         field: 'source',
//         headerName: 'Source',
//         flex:0.3, 
//         editable: true,
//     },
//     {
//         field: 'duration',
//         headerName: 'Duration',
//         flex:0.15,
//         editable: true,
//     },
// ];

// const rows = [
//   {
//     id: 1,
//     content: { 
//       contentType:"Article",
//       icon: Article
//     },
//     title: {
//       titleText:"The GROW Model of Coaching and Mentoring",
//       href: "https://www.mindtools.com/pages/article/newLDR_89.htm",
//     },
//     source: "Mind Tools",
//     duration: "9 mins",
//   },
//   {
//     id: 2,
//     content: { 
//       contentType:"Article",
//       icon: Article
//     },
//     title: {
//       titleText:"The 5 Essentials to Effective Coaching E",
//       href: "https://www.entrepreneur.com/article/292877",
//     },
//     source: "Entrepreneur.com",
//     duration: "5 mins",
//   },
//   {
//     id: 3,
//     content: { 
//       contentType:"Article",
//       icon: Article
//     },
//     title: {
//       titleText:"The Key to Effective Coaching",
//       href: "https://www.forbes.com/2010/04/28/coaching-talent-development-leadership-managing-ccl.html?sh=1b14b6ca38e0",
//     },
//     source: "Forbes",
//     duration: "7 mins",
//   },
//   {
//     id: 4,
//     content: { 
//       contentType:"Podcast",
//       icon: Podcast
//     },
//     title: {
//       titleText:"Coaching for Leaders Podcast",
//       href: "https://coachingforleaders.com/",
//     },
//     source: "Dave Stachowiak",
//     duration: "Various",
//   },
//   {
//     id: 5,
//     content: { 
//       contentType:"Podcast",
//       icon: Podcast
//     },
//     title: {
//       titleText:"Accelerating Growth through Coaching",
//       href: "https://awesomeatyourjob.com/631-accelerating-growth-through-coaching-with-andrea-wanerstrand/",
//     },
//     source: "How to be Awesome at Your Job",
//     duration: "42 mins",
//   },
// ];

// function EditToolbar(props) {
//   const apiRef = useGridApiContext();
//   const { selectedCellParams, setSelectedCellParams } = props;

//   const handleClick = async () => {
//     if (!selectedCellParams) {
//       return;
//     }
//     const { id, field, cellMode } = selectedCellParams;
//     if (cellMode === 'edit') {
//       apiRef.current.stopCellEditMode({ id, field });
//       setSelectedCellParams({ ...selectedCellParams, cellMode: 'view' });
//     } else {
//       apiRef.current.startCellEditMode({ id, field });
//       setSelectedCellParams({ ...selectedCellParams, cellMode: 'edit' });
//     }
//   };

//   const handleMouseDown = (event) => {
//     // Keep the focus in the cell
//     event.preventDefault();
//   };

//   return (
//     <Box
//       sx={{
//         justifyContent: 'center',
//         display: 'flex',
//         borderBottom: 1,
//         borderColor: 'divider',
//       }}
//     >
//       <Button
//         onClick={handleClick}
//         onMouseDown={handleMouseDown}
//         disabled={!selectedCellParams}
//         color="primary"
//       >
//         {selectedCellParams?.cellMode === 'edit' ? 'Save' : 'Edit'}
//       </Button>
//     </Box>
//   );
// }

// EditToolbar.propTypes = {
//   selectedCellParams: PropTypes.any,
//   setSelectedCellParams: PropTypes.func.isRequired,
// };

// export default function StartEditButtonGrid() {
//   const [selectedCellParams, setSelectedCellParams] = React.useState(null);

//   const handleCellClick = React.useCallback((params) => {
//     setSelectedCellParams(params);
//   }, []);

//   const handleCellEditStart = (params, event) => {
//     event.defaultMuiPrevented = true;
//   };

//   const handleCellEditStop = (params, event) => {
//     event.defaultMuiPrevented = true;
//   };

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         onCellClick={handleCellClick}
//         onCellEditStart={handleCellEditStart}
//         onCellEditStop={handleCellEditStop}
//         components={{
//           Toolbar: EditToolbar,
//         }}
//         componentsProps={{
//           toolbar: {
//             selectedCellParams,
//             setSelectedCellParams,
//           },
//         }}
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </div>
//   );
// }

function ToggleEditRenderCell(props){
  const apiRef = useGridApiContext();

  const handleClick = async () => {
    if (props.cellMode === 'edit') {
      console.log("ID!!!!", props);
      apiRef.current.updateRows([{id:props.id, content:props.row.content,title:props.row.title, duration:props.row.duration, source:props.row.source}]);
      apiRef.current.stopRowEditMode({id:props.id});
      
    } else {
      console.log(props.id);
      apiRef.current.startRowEditMode({id:props.id});
    }
  };

  return(
    <Button onClick={handleClick} variant="contained">{props.cellMode === 'edit'? 'Save':'Edit'}</Button>
  )
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
        renderEditCell: (params) => {
          return(
            <Stack direction="row" spacing={2} sx={{margin:2}}>
              <TextField size="small"  label="Link" variant="outlined"/>
              <TextField size='small'  label="Display Text" variant="outlined"/>
            </Stack>
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
    {
      field: 'edit',
      headerName: 'Edit',
      flex:0.15,
      editable: true,
      renderCell: ToggleEditRenderCell,
      renderEditCell: ToggleEditRenderCell
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
