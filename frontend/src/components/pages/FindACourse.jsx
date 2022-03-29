import React, {useState} from 'react';
import PageHeader from '../PageHeader'
import {Box, Stack, InputAdornment, TextField, Select, MenuItem, FormControl, InputLabel  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Dropdown from '../Dropdown';

const audiences = [
    {
        item: "IT",
    },
    {
        item: "People Team",
    },
    {
        item: "Sales",
    }
]

const deliveryMethods = [
    {
        item: "In Person",
    },
    {
        item: "Online",
    }
]

export default function FindACourse(){
    const [audience, setAudience] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("");
    return(
        <Box sx={{margin: 2, width:'100%'}}>
            <PageHeader subtitle="I-Learn" title="Find A Course"/>
            <Stack direction="row" spacing={6} sx={{marginTop:2}}>
                <TextField
                    varient="outlined"
                    sx={{width:'100%'}}
                    placeholder="Search..."
                    size="small"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    }}
                />

                <Dropdown 
                    label="Target Audience"
                    labelId="target-audience-label"
                    selectId="target-audience-select"
                    value={audience}
                    setValue={setAudience}
                    values={audiences}/>

                <Dropdown 
                    label="Delivery Method"
                    labelId="delivery-method-label"
                    selectId="delivery-method-select"
                    value={deliveryMethod}
                    setValue={setDeliveryMethod}
                    values={deliveryMethods}/>
            </Stack>
        </Box>
    )
}