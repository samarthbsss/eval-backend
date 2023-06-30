import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

export const Analytics=()=>{
    const [incomeChartData, setIncomeChartData] = useState({});
    const [expenseChartData, setExpenseChartData] = useState({});
  
    const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data');
        const data = response.data;
        console.log(data);

       
        const incomeData = calculateCategoryTotal(data, 'Income');
        const expenseData = calculateCategoryTotal(data, 'Expense');

      
        const incomeChart = generateChartOptions(
          'Income',
          Object.keys(incomeData),
          Object.values(incomeData)
        );
        const expenseChart = generateChartOptions(
          'Expense',
          Object.keys(expenseData),
          Object.values(expenseData)
        );

        setIncomeChartData(incomeChart);
        setExpenseChartData(expenseChart);
      } catch (error) {
        console.error('Error fetching transaction data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateCategoryTotal = (data, type) => {
    const filteredData = data.filter((item) => item.type === type);
    const categoryData = {};

    filteredData.forEach((item) => {
      if (categoryData[item.category]) {
        categoryData[item.category] += item.amount;
      } else {
        categoryData[item.category] = item.amount;
      }
    });

    return categoryData;
  };

  const generateChartOptions = (label, categories, amounts) => {
    return {
      labels: categories,
      datasets: [
        {
          data: amounts,
          backgroundColor: 'red',
        },
      ],
    };
  };



  return (
    <Box>
      <Heading size="lg" mb={4}>
        Analytics
      </Heading>
      <Box mb={4}>
        <Heading size="md" mb={2}>
          Income Chart
        </Heading>
        <Doughnut data={incomeChartData} />
      </Box>
      <Box>
        <Heading size="md" mb={2}>
          Expense Chart
        </Heading>
        <Doughnut data={expenseChartData} />
      </Box>
    </Box>
  );
};