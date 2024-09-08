import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
    id: number,
    name: string, 
    username: string,
    email: string,
    phone: string, 
    website: string
};

interface initialState{
    users: User[],
    status: string,
    error: null | string | undefined
};

const initialState: initialState = {
    users: [],
    status: "idle",
    error: null
}

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("Can't fetch the post");
    };
    const data = response.json();
    return data;
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchUsers.pending, (state)=>{state.status = "loading"})
        .addCase(fetchUsers.rejected, (state, action)=>{
            state.status = "fail";
            state.error = action.error?.message;
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.status = "succeed";
            state.users = action.payload;
        })
    }
})

export default usersSlice.reducer;