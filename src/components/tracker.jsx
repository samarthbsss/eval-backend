import {
  FormControl,
  FormLabel,
  Text,
  Button,
  Box,
  Flex,
  Link,
  Select,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addtransaction } from '../Redux/action';

export const Tracker = () => {
    const errror=useSelector(state=>state);
    console.log(errror);
  const dispatch = useDispatch();
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('Salary');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTypeChange = e => {
    setType(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const handleAmountChange = e => {
    setAmount(e.target.value);
  };
  const handleDateChange = e => {
    setDate(e.target.value);
  };

  const handlesubmit = e => {
    e.preventDefault();
    const user= localStorage.getItem('user');
    const transaction={
        user,
        type,
        category,
        amount,
        date,
    };
    dispatch(addtransaction(transaction));
    console.log("Hit",errror);
    setAmount('');
    setCategory('Salary');
    setDate('');
    setType('Income');
    alert('Data added to user successsfully');
  };


  return (
    <>
      <Flex justifyContent="space-evenly">
        <Link href="/dashboard/tracker">
          <Button>Tracker</Button>
        </Link>
        <Link href='/dashboard/analytics'>
        <Button>Analytics</Button>
        </Link>
        
        <Link href='/dashboard/history'>
        <Button>History</Button>
        </Link>
       
      </Flex>
      <Box m={50}>
        <form onSubmit={handlesubmit}>
          <Text>Tracker</Text>
          <FormControl>
            <FormLabel htmlFor="type">Type :</FormLabel>
            <Select id="type" value={type} onChange={handleTypeChange}>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="category">category :</FormLabel>
            <Select
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              {type === 'Income' ? (
                <>
                  <option value="Salary">Salary</option>
                  <option value="Gifts">Gifts</option>
                  <option value="Refunds">Refunds</option>
                  <option value="Others">Others</option>
                </>
              ) : (
                <>
                  <option value="Food & Drinks">Food & Drinks</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Housing">Housing</option>
                  <option value="Bills">Bills</option>
                  <option value="Vehicle & Transport">
                    Vehicle & Transport
                  </option>
                  <option value="Lifestyle">Lifestyle</option>
                </>
              )}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="amount">Amount in Rupees :</FormLabel>
            <Input
              type="amount"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="date">Date :</FormLabel>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Create
          </Button>
        </form>
      </Box>
    </>
  );
};
