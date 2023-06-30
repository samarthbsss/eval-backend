// import {Link} from '@chakra-ui/react';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Signup } from '../components/signup';
import { Login } from '../components/login';
import { Home } from '../components/Home';
import { Dashboard } from '../components/dashbord';
import {Box, Text,Link} from '@chakra-ui/react';
import { Tracker } from '../components/tracker';
import {History} from '../components/history';
import{ Analytics }from '../components/analytic';



export const Routing=()=>{
    return <>
    <Box align='center'>

   
        <Routes>
            <Route path='/' element={<Home/>}/>
             <Route path='/signup' element={<Signup/>}/> 
             <Route path='/login' element={<Login/>}/>
             <Route path='/dashboard' element={<Dashboard/>}/>
             <Route path='/dashboard/tracker' element={<Tracker/>}/>
             <Route path='/dashboard/history' element={<History/>}/>
             <Route path='/dashboard/analytics' element={<Analytics/>}/>
      </Routes>
      </Box>
    
    </>
}
