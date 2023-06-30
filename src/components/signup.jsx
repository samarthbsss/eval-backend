import React,{useState,useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux';
import { signUser } from "../Redux/action";
import {FormControl,FormLabel,Input, Button, Box} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

export const Signup=()=>{
    const dispatch=useDispatch();
   
    const Navigate=useNavigate();
    const [userData,setUserData]= useState({
        username:'',
        email:'',
        password:''
    })

    const handleInput=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }

    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log(userData);
        localStorage.setItem('user', userData.email);
        dispatch(signUser(userData));
        alert('Successfull Signed Up');
        Navigate('/dashboard');
    }
    return (
        
        <Box align='center' width={500} m={2} p={2}>
            <h1>Signup Page</h1>
            <form onSubmit={handlesubmit}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                    type='text'
                    name='username'
                    value={userData.username}
                    onChange={handleInput}
                    required
                />
            
            </FormControl>
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
                Signup!
            </Button>
            </form>

        </Box>
    )
}