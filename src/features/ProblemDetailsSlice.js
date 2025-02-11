import { createSlice } from "@reduxjs/toolkit";
import { executeCodeAction, getProblemDetailsAction } from "../network/ProblemsApi";


export const problemDetailsSlice = createSlice({
    name:"problemDetails",
    initialState:{
        problem:{},
        output:{},
        error:'',
        loading:false,
        status:'idle',
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getProblemDetailsAction.pending , (state,action)=>{
                state.status='pending'
                state.loading = true
                state.error=null
            })
            .addCase(getProblemDetailsAction.rejected , (state,action)=>{
                state.error=action.payload
                state.status='rejected'
                state.loading = false
            })
            .addCase(getProblemDetailsAction.fulfilled , (state,action)=>{
                state.problem = action.payload
                state.status='success'
                state.loading = false
                state.error=''
            })
            .addCase(executeCodeAction.pending , (state,action)=>{
                state.status='pending'
                state.loading = true
                state.error=null
            })
            .addCase(executeCodeAction.rejected , (state,action)=>{
                state.error=action.payload
                state.status='rejected'
                state.loading = false
            })
            .addCase(executeCodeAction.fulfilled , (state,action)=>{
                if(action.payload.run.stderr.length >=1){
                    state.error=action.payload.run.stderr
                    state.loading = false
                }else{  
                   
                
                    state.loading = false
                    state.error=''
                }
                state.status='success'
                state.output = action.payload
            })
    }
})
