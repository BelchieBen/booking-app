import React, {useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function FileUpload(){
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const handleUpload = (e) => {
        setSelectedFile(e.target.files[0]);
        setIsFilePicked(true);
    }

    return(
        <Box>
            <input type="file" id="upload" hidden onChange={handleUpload} />
            <label for="upload">
            <Box 
                sx={{
                    height:400, 
                    width:400, 
                    borderStyle:"dashed", 
                    borderColor:"#BDBDBD", 
                    display: 'flex',
                    justifyContent: "center", 
                    alignItems: "center",
                    backgroundColor:"transparent",
                    cursor: "pointer"
                }}>
                <Stack alignItems="center"> 
                    <Typography variant="body1" sx={{color:"#BDBDBD"}}>Upload Image</Typography>
                    <CloudUploadIcon sx={{color:"#BDBDBD"}} />
                </Stack>
            </Box>
            </label>
            <span id="file-chosen">{!selectedFile ? "No file chosen" : selectedFile.name}</span>
        </Box>
    )
}