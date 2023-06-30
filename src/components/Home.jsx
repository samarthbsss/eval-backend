import React from "react";
import {Box, Text,Link} from '@chakra-ui/react';


export const Home=()=>{
    return <>
      <Box display='flex' justifyContent={"space-evenly"} padding='10px 20px'>
        <Link href='/signup'>Signup Page</Link>
        <Link href='/login'>Login Page</Link>
        <Link href='/dashboard'>Dashboard Page</Link>
      </Box>
       
    
    </>
}
