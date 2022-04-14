// import MUIDataTable from "mui-datatables";

// export default function EditableTable(props) {
//     const columns = ["Name", "Company", "City", "State"];

//     const data = [
//     ["Joe James", "Test Corp", "Yonkers", "NY"],
//     ["John Walsh", "Test Corp", "Hartford", "CT"],
//     ["Bob Herm", "Test Corp", "Tampa", "FL"],
//     ["James Houston", "Test Corp", "Dallas", "TX"],
//     ];

//     const options = {
//     filterType: 'checkbox',
//     };
//     return(
//         <MUIDataTable
//         title={"Employee List"}
//         data={data}
//         columns={columns}
//         options={options} />
//     )
// }

import * as React from 'react';
import Box from '@mui/material/Box';
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
        field: 'name', 
        headerName: 'Name',
        flex:1, 
        editable: true 
    },
    { 
        field: 'age', 
        headerName: 'Age', 
        type: 'number', 
        flex:1, 
        editable: true 
    },
    {
        field: 'dateCreated',
        headerName: 'Date Created',
        type: 'date',
        flex:1, 
        editable: true,
    },
    {
        field: 'lastLogin',
        headerName: 'Last Login',
        type: 'dateTime',
        flex:1, 
        editable: true,
    },
];

const rows = [
  {
    id: 1,
    name: "Test name",
    age: 25,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
  {
    id: 2,
    name: "Test name",
    age: 36,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
  {
    id: 3,
    name: "Test name",
    age: 19,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
  {
    id: 4,
    name: "Test name",
    age: 28,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
  {
    id: 5,
    name: "Test name",
    age: 23,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
];