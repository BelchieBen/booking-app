import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage';
import UserDetails from './components/UserDetails';
import NavigationSideBar from './components/NavigationSideBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import {useState} from 'react';
import React, {useRef} from 'react';
import Homepage from './components/pages/Homepage';
import FindACourse from './components/pages/FindACourse';
import LearningRecord from './components/pages/LearningRecord'
import Stack from '@mui/material/Stack';
import {
  Routes,
  Route
} from 'react-router-dom';


function App() {
  const [user, setUser] = useState();
  console.log(user);

  return (
      <Box sx={{width:'100%', height:'100vh'}} >
          {!user? <LoginPage setUser={setUser}/> : 
          <Stack direction="row"> 
            <NavigationSideBar user={user} setUser={setUser}/>
              <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/courses/find' element={<FindACourse/>} />
                <Route path='/record/:id' element={<LearningRecord user={user}/>} />
              </Routes>
          </Stack>
          
            }
      </Box>
  );
}

export default App;
