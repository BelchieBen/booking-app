import React from 'react';
import Link from '@mui/material/Link'

export default function NavLink(props) {
    return(
        <Link href={props.href} underline="none" sx={{color:'#000000', fontSize:'1.1rem'}}>{props.text}</Link>
    )
}