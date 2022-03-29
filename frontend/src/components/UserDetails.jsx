import React, {useState} from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LogoutPage from './pages/LogoutPage'

export default function UserDetails(props){
    const [user, setUser] = useState();

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
        <Box sx={{borderRadius:4}}>    
            {!user?
            // No user is found
             <Avatar src="../utils/images/user.png" /> 
             :
             // User is found and set
            <Card>
                <CardContent sx={{borderRadius: 6}}>
                    <Avatar src={user.imageUrl} />
                    <Typography variant="h5">{user.givenName} {user.familyName}</Typography>
                    <Typography varient="body1">{user.email}</Typography>
                </CardContent>
                <CardActions>
                    <LogoutPage setUser={setUser}/>
                </CardActions>
            </Card>
            }
        </Box>
        
    )
}