//Importamos las herramientas de Redux:
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Creamos la interface de los posts:
interface Post{
    id: number,
    title: string,
    body: string
};

//Creamos la interfaz del estado inicial:
interface initialState{
    posts: Post[],
    status: string,
    error: null | string | undefined
};
//Creamos el estado inicial: 
const initialState : initialState ={
    posts: [],
    status: "idle",
    error: null
};

//Función del fetch con redux thunk: 
export const fetchPosts = createAsyncThunk("post/fetchPosts", async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok){
        throw new Error("Can't fetch the post");
    };
    const data = response.json();
    return data;
})

//creamos el slice de posts:
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state)=>{state.status = "loading"})
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.status = "fail";
                state.error = action.error?.message;
            })
            .addCase(fetchPosts.fulfilled, (state, action)=>{
                state.status = "succeed";
                state.posts = action.payload;
            })
    },
});


//Se exporta por default el postSlice.reducer:
export default postSlice.reducer;