import React from 'react';
import {Select, MenuItem, FormControl, InputLabel  } from '@mui/material';

export default function Dropdown(props) {
    return(
        <FormControl fullWidth>
            <InputLabel id={props.labelId} size="small">{props.label}</InputLabel>
            <Select
                labelId={props.labelId}
                id={props.selectId}
                value={props.value}
                label="Delivery Method"
                size="small"
                onChange={(e) => {props.setValue(e.target.value)}}>

            {props.values.map(data => (
                <MenuItem value={data.item}>{data.item}</MenuItem>
            ))}

            </Select>
        </FormControl>
    )
}