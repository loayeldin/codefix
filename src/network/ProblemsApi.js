import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "./axiosClient";
import axios from "axios";
import { LANGUAGE_VERSION } from "../pages/Problems/Components/Constants";

export const getAllProblemsAction = createAsyncThunk("problems" , async()=>{
    try{
        const response = await axiosClient.get('/problems')
        return response.data
    }
    catch(err){
        console.log(err);
    }
})
export const getProblemDetailsAction = createAsyncThunk("problems/getDetails" , async(id)=>{
    try{
        const response = await axiosClient.get(`/problems/${id}`)
        return response.data
    }
    catch(err){
        console.log(err);
    }
})
export const executeCodeAction = createAsyncThunk("problems/getDetails/execute" , async({lang,sourceCode})=>{
    console.log(lang,sourceCode,'actionnnnn');
    try{
        const response = await axios.post('https://emkc.org/api/v2/piston/execute',
        {
            language: lang,
            version: LANGUAGE_VERSION[lang],
            files: [
              {
                content: sourceCode,
              },
            ],
          }
        )
        return response.data
    }
    catch(err){
        console.log(err);
    }
})
// export const executeCodeAction = createAsyncThunk(
//     "problems/getDetails/execute",
//     async ({ lang, sourceCode, testCases }) => {
//       console.log("Executing code with language:", lang);
//       console.log("Source code:", sourceCode);
//       console.log("Test Cases:", testCases);
  
//       try {
//         const executionResults = await Promise.all(
//           testCases.map(async ({ input, output }) => {
//             try {
//               const response = await axios.post(
//                 "https://emkc.org/api/v2/piston/execute",
//                 {
//                   language: lang,
//                   version: LANGUAGE_VERSION[lang],
//                   files: [{ content: sourceCode }],
//                   stdin: input,
//                 }
//               );
//               return {
//                 input,
//                 expectedOutput: output,
//                 receivedOutput: response.data.run?.stdout?.trim() || "No output",
//                 isCorrect: response.data.run?.stdout?.trim() === output.trim(),
//               };
//             } catch (error) {
//               console.error("Execution failed for input:", input, error);
//               // Retry logic for rate-limit error
//               if (error.response?.status === 429) {
//                 console.log("Rate limit exceeded, retrying after 5 seconds...");
//                 await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5 seconds
//                 return await executeCodeAction({ lang, sourceCode, testCases });
//               }
//               return {
//                 input,
//                 expectedOutput: output,
//                 receivedOutput: "Error",
//                 isCorrect: false,
//               };
//             }
//           })
//         );
  
//         return executionResults;
//       } catch (err) {
//         console.error("Execution failed:", err);
//         throw err;
//       }
//     }
//   );
  
  