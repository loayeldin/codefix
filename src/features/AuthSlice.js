import { createSlice } from "@reduxjs/toolkit";
import { autoLogin, loginAction, registerAction } from "../network/AuthApi";
import Cookies from "js-cookie";

export const authSlice = createSlice({
    name:'userInfo',
    initialState:{
        userData:null, // {}
        loading:false,
        status:'idle',
        error:null,

    },
    reducers:{
        //to set userData from cookies
        setUserData: (state, action) => {
            state.userData = action.payload;
            state.status='success'
        },
        logout: (state) => {
            Object.keys(Cookies.get()).forEach((cookie) => {
                Cookies.remove(cookie, { path: "/" });
              }); //remove all cookies
            localStorage.removeItem("idTokenExpires")
            state.userData = null;
            // window.location.reload(); // Refresh to apply logout
        }
    },
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
                state.userData = action.payload // check logic
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
                const {displayName,email,registered,localId } = action.payload
                state.userData = {displayName,email,registered,localId}
                state.status='success'
                state.loading = false
            })
 
            .addCase(autoLogin.pending , (state,action)=>{
                state.status='pending'
                state.loading = true
                state.error=null
            })
            .addCase(autoLogin.rejected , (state,action)=>{
            
                state.error=action.payload
                state.status='rejected'
                state.loading = false
            })
            .addCase(autoLogin.fulfilled , (state,action)=>{
                //destructing the response values
                console.log(action.payload);
                const {id_token , refresh_token ,expires_in} = action.payload
                Cookies.set("refreshToken", refresh_token, { expires: 1 }); // 1 day
                Cookies.set("idToken", id_token, { expires: expires_in / 86400}); // 1 hour
                Cookies.set("expiresIn", expires_in, {  expires: expires_in / 86400});  // 1 hour

                const expirationTime = Date.now() + expires_in * 1000; // Convert seconds to milliseconds 1 hour
                localStorage.setItem("idTokenExpires",expirationTime)
                const user = JSON.parse(Cookies.get("user"))
          
                console.log(user , 'auto');
                state.userData = user
                
                state.status='success'
                state.loading = false
        
        
            })

    }
})
export const { logout ,setUserData} = authSlice.actions;