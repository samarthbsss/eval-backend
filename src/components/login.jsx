import React,{useState,useEffect} from "react"
import {useDispatch,  useSelector} from 'react-redux';
import {FormControl,FormLabel,Input, Button, Box} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import { loginUser } from "../Redux/action";

export const Login=()=>{
    const dispatch=useDispatch();
    const Navigate=useNavigate();
    const error =useSelector((state)=>state);
    console.log(error);


  
    const [userData,setUserData]= useState({
    
        email:'',
        password:''
    })

    const handleInput=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
      
    }
   
    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log(userData);
        console.log(userData.email)
        localStorage.setItem('user', userData.email);
        dispatch(loginUser(userData));
       
        alert('Successfully logged In');
        Navigate('/dashboard');
    }

    return (
        <Box align='center' width={500} m={2} p={2}>
             <h1>Login Page</h1>
             <form onSubmit={handlesubmit}>
          
            <FormControl>
                <FormLabel>Email :</FormLabel>
                <Input
                    type='email'
                    name='email'
                    value={userData.email}
                    onChange={handleInput}
                    required
                />
            
            </FormControl>
            <FormControl>
                <FormLabel>Password :</FormLabel>
                <Input
                    type='password'
                    name='password'
                    value={userData.password}
                    onChange={handleInput}
                    required
                />
            
            </FormControl>
            <Button colorScheme="green" type='submit' mt={5}>
               Login!
            </Button>
            </form>
        </Box>
       
    )
}