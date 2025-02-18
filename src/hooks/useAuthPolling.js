import React, { useEffect, useRef } from 'react'
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { logout } from '../features/AuthSlice';
import { autoLogin } from '../network/AuthApi';

function useAuthPolling() {
    const intervalRef = useRef(null);
    const dispatch = useDispatch()
    // // Polling to detect cookie expiration every 5 minutes


    useEffect(() => {
        console.log(intervalRef.current);
       
        if (!Cookies.get("refreshToken") ) {
            console.log("❌ Refresh token removed. Stopping interval...");
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            dispatch(logout()); // Logout immediately
            return;
        };
        if (intervalRef.current) {
          console.log("⏳ Polling already running. Skipping...");
          return; // Prevent multiple intervals
        }
        intervalRef.current = setInterval(() => {
            const idTokenExpires = localStorage.getItem("idTokenExpires")
            console.log(typeof(idTokenExpires));
            const refreshToken = Cookies.get("refreshToken")
            const idToken = Cookies.get("idToken");
            const now = Date.now();
            console.log(idTokenExpires, now);
            if(!refreshToken || !idTokenExpires || !idToken){
              console.log("❌ Refresh token removed. Stopping interval...");
              clearInterval(intervalRef.current);
              intervalRef.current = null;
              dispatch(logout())
              return;
            }
            // Check if the token is about to expire (5 min before)
            if (refreshToken && now >= Number(idTokenExpires) - 5 * 60 * 1000) {
              dispatch(autoLogin()).then(()=>{
                console.log('auto log in success');
              })
            }
        }, 60000);
      
        return () =>{
          console.log(intervalRef.current, ' from return');
          console.log("🛑 Cleaning up polling on unmount.");
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
    
    
    }, [document.cookie]);
    
}

export default useAuthPolling