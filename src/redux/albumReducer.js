import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Initial state of our store.albumReducer
const INITIAL_STATE={
    album:[],
    isLoading:false,
};

//the only async action dispatched anywhere in the code and also for only once upon initial render 
export const getInitialData=createAsyncThunk("album/getInitialdataby",async ()=>{
    return fetch("https://jsonplaceholder.typicode.com/albums").then(result=>result.json());
})


//************************************************************************************************************************************* */

//now the below 3 async operations are just for demonstartions purposes only, have never been used or dispatched anywhere in the code as the changes won't be reflected upon the ui
//so instead what we are doing here is populating our in memory store once and only once upon initial render and then dispatching local sync actions written in reducer section
//so that we can see the changes in the ui upon dispatching those actions

//************************************************************************************************************************************* */
export const addAlbumAsync=createAsyncThunk("album/addAlbumAsync", async (arg)=>{
    return fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'POST',
        body: JSON.stringify({
          ...arg.formValue
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
})
export const deleteAlbumAsync=createAsyncThunk("album/deleteAlbumAsync",async (arg)=>{
    return fetch(`https://jsonplaceholder.typicode.com/albums/${arg.id}`, {
        method: 'DELETE',
      });
})

export const updateAlbumAsync=createAsyncThunk("album/updateAlbumAsync",async(arg)=>{
    return fetch(`https://jsonplaceholder.typicode.com/albums/${arg.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            ...arg.formValue
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
})
//*************************************************************************************************************************************** */


const albumSlice=createSlice({
    name:"album",
    initialState:INITIAL_STATE,
    //the sync actions that has been used in our application, the async ones are written above but never dispatched
    reducers:{
        "addAlbum":(state=INITIAL_STATE,action)=>{
            state.album=[...state.album,action.payload]
        },
        "deleteAlbum":(state=INITIAL_STATE,action)=>{
            const index=state.album.findIndex((album)=>album.id===action.payload)
            state.album.splice(index,1);
        },
        "updateAlbum":(state=INITIAL_STATE,action)=>{
            const index=state.album.findIndex((alb)=>alb.id===action.payload.id);
            state.album[index]=action.payload.formValue;
        },
        "setIsLoading":(state=INITIAL_STATE,action)=>{
            state.isLoading=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialData.fulfilled,(state,action)=>{
            state.album=[...action.payload]
            state.isLoading=false;
        })
    }
})


export const albumReducer=albumSlice.reducer;
export const albumSelector=(state)=>state.albumReducer;
export const {addAlbum,deleteAlbum,updateAlbum,setIsLoading}=albumSlice.actions;
