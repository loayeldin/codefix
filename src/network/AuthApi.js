import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
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

        const {refreshToken , idToken , expiresIn, ...user} = response.data
        Cookies.set("refreshToken", refreshToken, { expires: 1 }); // 1 day
        Cookies.set("idToken", idToken, {  expires: expiresIn / 86400}); // 1 hour
        Cookies.set("expiresIn", expiresIn, {  expires: expiresIn / 86400}); // 1 hour
        Cookies.set("user",JSON.stringify(user),{expires:expiresIn / 86400 }) // 1 hour

        
        const expirationTime = Date.now() + expiresIn * 1000; // Convert seconds to milliseconds  1 hour
        localStorage.setItem("idTokenExpires", expirationTime ) // 1 hour


        return response.data
    }   
    catch(err){
        if (err.response && err.response.data) {
            return rejectWithValue(err.response.data.error.message); 
          }
          return rejectWithValue(err.message);
    }
})

export const autoLogin = createAsyncThunk("auth/autoLogin" , async(_, {rejectWithValue})=>{
    try{
        const refreshToken = Cookies.get("refreshToken")
        console.log(refreshToken);
        if(!refreshToken){
            return rejectWithValue("no saved login session")
        }
        // Refresh the ID token
        const response = await axios.post(
            `https://securetoken.googleapis.com/v1/token?key=${fireBaseApiKey}`,
            {
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            }
        );
        return response.data
    }
    catch(err){
        console.log(err);
    }
}) 