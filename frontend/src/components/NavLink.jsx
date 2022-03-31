import React from 'react';
// import Link from '@mui/material/Link'
import {Link} from 'react-router-dom'

export default function NavLink(props) {
    return(
        <Link to={props.href} className="nav-link" sx={{color:'#000000', fontSize:'1.1rem', textDecoration:'none'}}>{props.text}</Link>
    )
}