import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fireBaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY
export const registerAction = createAsyncThunk("auth/register" , async(userData,  { rejectWithValue })=>{
    try{
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fireBaseApiKey}`,{
            returnSecureToken:true,
            ...userData
        })
        return response.data
    }
    catch(err){
        if (err.response && err.response.data) {
            return rejectWithValue(err.response.data.error.message); // Example: "EMAIL_EXISTS"
          }
          return rejectWithValue(err.message); // Fallback
        
    }

})

export const loginAction = createAsyncThunk("auth/login", async(userData,{rejectWithValue})=>{
    try{
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${fireBaseApiKey}`,{
            returnSecureToken:true,
            ...userData
        })
        return response.data
    }   
    catch(err){
        if (err.response && err.response.data) {
            return rejectWithValue(err.response.data.error.message); // Example: "INVALID_LOGIN_CREDENTIALS"
          }
          return rejectWithValue(err.message); // Fallback
    }
})