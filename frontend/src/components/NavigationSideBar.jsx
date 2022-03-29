import React, {useState} from 'react';
import {Box, Typography, Stack, Divider, Avatar, InputAdornment, TextField, IconButton} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AppsIcon from '@mui/icons-material/Apps';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NavLink from './NavLink'
import { useGoogleLogout } from 'react-google-login';

const clientId = "945406263981-q6r8d575nd6orns70p25s95l92odtrrq.apps.googleusercontent.com"

export default function NavigationSideBar(props){
    const [user, setUser] = useState();

    const onLogoutSuccess = (res) => {
        setUser(null);
        props.setUser(null);
        console.log("Logout success")
    }

    const onLogoutFailure = (res) => {
        console.log("Logout failed")
    }

    const {signOut} = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onLogoutFailure
    });

    React.useEffect(() => {
        if(typeof(user) === "undefined"){
            setUser(props.user);
            console.log("No user");
        }
        else if(user === null){
            props.setUser(null);
        }
        console.log(user);
    }, [user])

    return(
        <Stack direction="row" minWidth="340px" sx={{backgroundColor:'#F4F5F6'}}>
            <Box sx={{height:'100%' ,width:'80px', backgroundColor:'#1B838B'}} className="side-nav">
                {!user ? 
                    <IconButton onClick={() => {console.log("Testing")}}><Avatar sx={{margin:'8px 8px 24px 8px'}}/></IconButton>: 
                    <IconButton onClick={() => {console.log(user.givenName)}}><Avatar src={user.imageUrl}  sx={{margin:'8px 8px 24px 8px'}}/></IconButton>
                }
                
            </Box>
            <Box sx={{width:'100%', paddingLeft:2,  paddingRight:2,  paddingTop:2}}>
                <Stack direction="row" spacing={2}>
                    <CalendarMonthIcon />
                    <Typography variant="h6">I-Learn</Typography>
                </Stack>

                <Divider />

                <Stack spacing={2}>
                    <TextField
                        varient="outlined"
                        size="small"
                        sx={{width:'100%', marginTop:2}}
                        placeholder="Search..."
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                            ),
                        }}
                    />

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <PersonIcon style={{marginRight:'1rem'}} />
                        <NavLink href="#" text="My Bookings"/>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <CalendarMonthIcon style={{marginRight:'1rem'}}/>
                        <NavLink href="#" text="Find A Course"/>
                    </div>
                    <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                        <LogoutIcon style={{marginRight:'1rem'}}/>
                        <NavLink href="#" text="External Training"/>
                    </div>
                    <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                        <AppsIcon style={{marginRight:'1rem'}}/>
                        <NavLink href="#" text="Learning Record"/>
                    </div>
                    <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                        <InfoIcon style={{marginRight:'1rem'}}/>
                        <NavLink href="#" text="About L&D"/>
                    </div>
                    <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                        <GroupIcon style={{marginRight:'1rem'}}/>
                        <NavLink href="#" text="Manager Tools"/>
                    </div>
                    <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                        <TuneIcon style={{marginRight:'1rem'}}/>
                        <NavLink href="#" text="Admin Tools"/>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <SettingsIcon style={{marginRight:'1rem'}}/>
                        <NavLink href="#" text="Settings"/>
                    </div>
                </Stack>
                <Box sx={{height:'100vh',display: 'flex',justifyContent: "flex-end", alignItems: "flex-end"}}>
                        <IconButton onClick={signOut}>
                            <LogoutOutlinedIcon />
                        </IconButton>
                </Box>
            </Box>
        </Stack>
    )
}