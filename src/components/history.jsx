import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'


export const History=()=>{
    return<>
    <Text>History</Text>
    </>
}