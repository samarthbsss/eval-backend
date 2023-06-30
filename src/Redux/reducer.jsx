import { combineReducers } from "redux";

const intialState={
    currentUser:null,
}

const userReducer =( state = intialState, action)=>{
    switch(action.type){
        case 'SIGNUP_USER':
            return {...state, currentUser: action.payload};
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload};
        default:
            return state;
    }
}

const dashState={
    user:null,
    error:null,
    transaction:[]
}

const authReducer =(state =dashState, action)=>{
    
    switch(action.type){
        
        case 'ADD_TRANSACTION':
            
            return{
                ...state,
               
                user:[state.user,action.payload],
                transaction:[state.transaction, action.payload],
            };
    
        default:
            return state;
    }
}

const rootReducer =combineReducers({
    user:userReducer,
    data:authReducer
})

export default rootReducer;