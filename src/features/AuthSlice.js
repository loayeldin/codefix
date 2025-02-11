import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "../network/AuthApi";

export const authSlice = createSlice({
    name:'userInfo',
    initialState:{
        userData:{},
        loading:false,
        status:'idle',
        error:null,

    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(registerAction.pending , (state,action)=>{
                state.status='pending'
                state.loading = true
                state.error=null
            })
            .addCase(registerAction.rejected , (state,action)=>{
                console.log(action.payload);
                state.error=action.payload
                state.status='rejected'
                state.loading = false
            })
            .addCase(registerAction.fulfilled , (state,action)=>{
                state.userData = action.payload
                state.status='success'
                state.loading = false
            })
            .addCase(loginAction.pending , (state,action)=>{
                state.status='pending'
                state.loading = true
                state.error=null
            })
            .addCase(loginAction.rejected , (state,action)=>{
                console.log(action.payload);
                state.error=action.payload
                state.status='rejected'
                state.loading = false
            })
            .addCase(loginAction.fulfilled , (state,action)=>{
                state.userData = action.payload
                state.status='success'
                state.loading = false
            })

    }
})
