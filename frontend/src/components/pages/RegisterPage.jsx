import React, {useState} from "react";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios'



export default function RegisterPage(){
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const options = {
    //     method: 'post',
    //     url: '/register',
    //     data: {
    //         firstname: firstName,
    //         lastname: lastName,
    //         email: email
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/register', {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        })
    }

    return(
        <Container maxWidth="md">
            <Box sx={{width:'100%', height:'100vh'}} className="center-box">
                <form className="register-form" onSubmit={e =>handleSubmit(e)}>
                    <Stack spacing={2}>
                        <TextField 
                            required
                            label="First Name" 
                            variant="outlined" 
                            type = 'text' 
                            name = 'firstName' 
                            placeholder = "First Name" 
                            onChange = {e => setFirstname(e.target.value)} 
                            value={firstName}
                            />

                        <TextField 
                            required
                            label="Last Name" 
                            variant="outlined" 
                            type = 'text' 
                            name = 'lastname' 
                            placeholder = "Last Name" 
                            onChange = {e => setLastname(e.target.value)}  
                            value={lastName}
                            />

                        <TextField 
                            required
                            label="Email" 
                            variant="outlined" 
                            type = 'email' 
                            name = 'email' 
                            placeholder = "Email" 
                            onChange = {e => setEmail(e.target.value)}  
                            value={email}
                            />

                        <TextField 
                            required
                            label="Password" 
                            variant="outlined" 
                            type = 'password' 
                            name = 'password' 
                            placeholder = "Password" 
                            onChange = {e => setPassword(e.target.value)}   
                            value={password}
                            />

                        <Button
                            color = 'primary' 
                            variant="contained" 
                            type = 'submit'>
                                Register
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Container>
    );
}

