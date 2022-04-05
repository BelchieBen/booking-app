import React, {useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function FileUpload(){
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [preview, setPreview] = useState();

    React.useEffect(() => {
        if(selectedFile != null){
            const previewSrc = URL.createObjectURL(selectedFile);
            console.log(previewSrc);
            setPreview(previewSrc);
        }
        else{    
        }
        console.log(selectedFile);
    }, [selectedFile])

    const handleUpload = (e) => {
        setSelectedFile(e.target.files[0]);
        setIsFilePicked(true);
    }

    const handleDrop = e => {
        e.preventDefault();
        console.log("drag and dropped");
        setSelectedFile(...e.dataTransfer.files);
        setIsFilePicked(true);
    }

    const handleDragEnter = e => {
        e.preventDefault();
        console.log("drag enter");
      };
    
      const handleDragLeave = e => {
        e.preventDefault();
        console.log("drag leave");
      };
    
      const handleDragOver = e => {
        e.preventDefault();
        console.log("drag over");
      };

      const handleInputChange = () => {};

    return(
        <Box>
            <input type="file" id="upload" hidden onChange={handleUpload} />
            <label for="upload">
            <Box 
                onDrop={e => handleDrop(e)}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}
                onChange={handleInputChange}
                sx={{
                    height:300, 
                    width:300, 
                    borderStyle:"dashed", 
                    borderColor:"#BDBDBD", 
                    display: 'flex',
                    justifyContent: "center", 
                    alignItems: "center",
                    backgroundColor:"transparent",
                    cursor: "pointer"
                }}>
                {!selectedFile ? 
                <Stack alignItems="center"> 
                    <Typography variant="body1" sx={{color:"#BDBDBD"}}>Upload Image</Typography>
                    <CloudUploadIcon sx={{color:"#BDBDBD"}} />
                </Stack>
                :
                <Box component="img" src={preview} sx={{height:'100%', width:'100%'}} />
            }
            </Box>
            {console.log(selectedFile)}
            </label>
            <span id="file-chosen" class="chose-file">{!selectedFile ? "No file chosen" : selectedFile.name}</span>
        </Box>
    )
}