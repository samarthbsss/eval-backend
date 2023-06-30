import axios from 'axios';

export const signUser = (userData)=> async (dispatch)=>{
    try {
        const res= await axios.post('http://localhost:3000/users', userData);
        dispatch({ type:'SIGNUP_USER', payload : res.data});
        console.log('From signuser')
    } catch (error) {
        console.error('Error signing up :Errror', error);
    }
}

export const loginUser =(userData)=>async (dispatch)=>{
    try {
        const res= await axios.get('http://localhost:3000/users');
        const user= res.data.find((u)=>u.username===userData.username && u.password===userData.password);
        if(user){
            dispatch({type:'LOGIN_USER', payload:user});
            alert('Login Succesfull');
        }else{
            alert('login failed');

        }

    } catch (error) {
        console.error('Error Logging in Failed');
    }
}
export const addtransaction=(transaction)=>async(dispatch)=>{
    try {
        const res= await axios.post('http://localhost:3000/data',transaction);
        dispatch({type:'ADD_TRANSACTION',payload:res.data})
    } catch (error) {
        console.error('transaction Falied', error);
    }
}


