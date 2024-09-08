import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Comment{
    postId: number,
    id: number,
    name: string, 
    email: string,
    body: string
};

interface initialState{
    comments: Comment[],
    status: string,
    error: null | string | undefined
};

const initialState: initialState = {
    comments: [],
    status: "idle",
    error: null
}

export const fetchComments = createAsyncThunk("post/fetchComments", async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    if(!response.ok){
        throw new Error("Can't fetch the post");
    };
    const data = response.json();
    return data;
})

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchComments.pending, (state)=>{state.status = "loading"})
        .addCase(fetchComments.rejected, (state, action)=>{
            state.status = "fail";
            state.error = action.error?.message;
        })
        .addCase(fetchComments.fulfilled, (state, action)=>{
            state.status = "succeed";
            state.comments = action.payload;
        })
    }
})

export default commentSlice.reducer;