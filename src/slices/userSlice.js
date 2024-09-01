import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users:[],
};

export const userSlice = createSlice({
    name:"users",
    initialState, //You can use any type of will be used like unique name...
    reducers:{
        setUsers:(state,action) => { // (action,payload) current state is {state} second value is {action}
            state.users = [...state.users,action.payload];
        },
        deleteUser:(state,action) =>{
            state.users = state.users.filter((user,index)=> index !== action.payload);
        },
    },
});

export const {setUsers , deleteUser} = userSlice.actions;
export default userSlice.reducer;
