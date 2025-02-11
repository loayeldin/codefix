import { configureStore } from "@reduxjs/toolkit";
import  { authSlice } from "../features/AuthSlice";
import { problemsSlice } from "../features/ProblemsSlice";
import { problemDetailsSlice } from "../features/ProblemDetailsSlice";




export default configureStore({
    reducer:{
        userInfo:authSlice.reducer,
        problems:problemsSlice.reducer,
        problemDetails:problemDetailsSlice.reducer
    }
})