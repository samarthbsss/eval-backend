import {FormControl,FormLabel,Input, Text,Button, Box,Flex,Link} from '@chakra-ui/react';
import React,{useState,useEffect} from "react"
import {useDispatch,  useSelector} from 'react-redux';
import { Tracker } from './tracker';


export const Dashboard=()=>{
   
    return (
        <Box>

<Flex justifyContent='space-evenly'>
    <Link href='/dashboard/tracker'>
    <Button  >
         Tracker
      
  
    </Button>
    </Link>
    
    <Link href='/dashboard/analytics'>
    <Button>

Analytics
    </Button>
    </Link>
    <Link href='/dashboard/histroy'>
    <Button>
        History
        </Button>
    </Link>
   
       

</Flex>


</Box>
    )
       
        
}

