import React, {useState} from 'react';
import {Box, Stack, Divider, Avatar, InputAdornment, TextField, IconButton, Link, ListItemIcon, ListItemText, ListItemButton, List, Collapse, ListItem} from '@mui/material';
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
import NavLink from './NavLink';
import { useGoogleLogout } from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const clientId = "945406263981-q6r8d575nd6orns70p25s95l92odtrrq.apps.googleusercontent.com"

export default function NavigationSideBar(props){
    const [user, setUser] = useState();
    const [managerListOpen, setManagerListOpen] = useState(false);
    const [adminListOpen, setAdminListOpen] = useState(false);
    const navigate = useNavigate();

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

    const handleClick = () => {
        setManagerListOpen(!managerListOpen);
      };

      const handleAdminClick = () => {
        setAdminListOpen(!adminListOpen);
      };

      const handleNavigate = (url) => {
          navigate(url);
      }

    return(
        <Stack direction="row" minWidth="340px" sx={{backgroundColor:'#F4F5F6'}}>
            <Box sx={{height:'100%' ,width:'80px', backgroundColor:'#1B838B'}} className="side-nav">
                {!user ? 
                    <IconButton onClick={() => {console.log("Testing")}}><Avatar sx={{margin:'8px 8px 24px 8px'}}/></IconButton>: 
                    <IconButton onClick={() => {navigate("/record/"+user.googleId)}}><Avatar src={user.imageUrl}  sx={{margin:'8px 8px 24px 8px'}}/></IconButton>
                }
                
            </Box>
            <Box sx={{width:'100%', paddingLeft:2,  paddingRight:2,  paddingTop:2}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    }}>
                    <IconButton onClick={() => {navigate("/")}}>        
                        <CalendarMonthIcon  />
                    </IconButton>
                    <Link href="/" underline="none" lineHeight="1.6" sx={{color:'#000000', fontSize:'1.25rem'}}>I-Learn</Link>
                </div>

                <Divider />

                <Stack>
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

                    <List sx={{width:'100%', margin:0}}>
                        <ListItem sx={{padding:0}}>
                            <ListItemButton sx={{padding:0}}>  
                                <ListItemIcon sx={{marginRight:'1em', minWidth:0}}>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{fontSize: '1.1rem'}}  primary="My Bookings" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{padding:0}}>
                            <ListItemButton sx={{padding:0}} >  
                                <ListItemIcon sx={{marginRight:'1em', minWidth:0}}>
                                    <CalendarMonthIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{fontSize: '1.1rem'}}  primary="Find A Course" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{padding:0}}>
                            <ListItemButton sx={{padding:0}}>  
                                <ListItemIcon sx={{marginRight:'1em', minWidth:0}}>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{fontSize: '1.1rem'}}  primary="External Training" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{padding:0}}>
                            <ListItemButton sx={{padding:0}}>  
                                <ListItemIcon sx={{marginRight:'1em', minWidth:0}}>
                                    <AppsIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{fontSize: '1.1rem'}}  primary="Learning Record" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{padding:0}}>
                            <ListItemButton sx={{padding:0}}>  
                                <ListItemIcon sx={{marginRight:'1em', minWidth:0}}>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{fontSize: '1.1rem'}}  primary="About L&D" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{padding:0}}>
                            <ListItemButton sx={{padding:0}} onClick={handleClick}>  
                                <ListItemIcon sx={{marginRight:'1em', minWidth:0}}>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{fontSize: '1.1rem'}}  primary="Manager Tools" />
                                {managerListOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={managerListOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="My Team's Bookings" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="My Team's Records" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Make A Team Booking" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                </List>
                            </Collapse>

                        <ListItem sx={{padding:0}}>
                            <ListItemButton sx={{padding:0}} onClick={handleAdminClick}>  
                                <ListItemIcon sx={{marginRight:'1em', minWidth:0}}>
                                    <TuneIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{fontSize: '1.1rem'}}  primary="Admin Tools" />
                                {adminListOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={adminListOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => {handleNavigate("/admin")}}>
                                        <ListItemText primary="Dashboard" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Pending Bookings" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Cancellations" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Session Schedule" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Past Sessions" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Courses" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Learning Pathways" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Training Matrix" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="User Management" sx={{marginLeft:'1em'}}/>
                                </ListItemButton>
                                </List>
                            </Collapse>

                            <ListItem sx={{padding:0}}>
                            <ListItemButton sx={{padding:0}}>  
                                <ListItemIcon sx={{marginRight:'1em', minWidth:0}}>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{fontSize: '1.1rem'}}  primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                        </List>
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