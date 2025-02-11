import { createSlice } from "@reduxjs/toolkit";
import { getAllProblemsAction } from "../network/ProblemsApi";


export const problemsSlice = createSlice({
    name:"problems",
    initialState:{
        problems:[],
        error:'',
        filteredProblems:[],
        loading:false,
        status:'idle',
    },
    reducers:{
      
        filterProblems: (state, action) => {
            const { search, difficulty } = action.payload;
        
            // Start with all problems as the base
            let filteredProblems = state.problems;
        
            // Apply the search filter if a search term exists
            if (search.trim() !== '') {
                const searchQuery = search.toLowerCase();
                filteredProblems = filteredProblems.filter((problem) =>
                    problem.challenge.toLowerCase().includes(searchQuery)
                );
            }
        
            // Apply the difficulty filter if a difficulty is selected
            if (difficulty.trim() !== '') {
                const difficultyQuery = difficulty.toLowerCase();
                // If difficulty is not "all", filter by difficulty
                if (difficultyQuery !== 'all') {
                    filteredProblems = filteredProblems.filter((problem) =>
                        problem.difficulty.toLowerCase() === difficultyQuery
                    );
                }
            }
        
            // Update the filteredProblems state with the final filtered list
            state.filteredProblems = filteredProblems;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProblemsAction.pending , (state,action)=>{
            state.status='pending'
            state.loading = true
            state.error=null
        })
        .addCase(getAllProblemsAction.rejected , (state,action)=>{
            console.log(action.payload);
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(getAllProblemsAction.fulfilled , (state,action)=>{
            state.problems = action.payload
            state.filteredProblems = action.payload
            state.status='success'
            state.loading = false
        })
    }
})

// Export actions
export const { filterProblems } = problemsSlice.actions;

export default problemsSlice.reducer;