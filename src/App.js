import './App.css';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import react, { Suspense } from 'react';
import Loader from "./Components/Loader";
import { useSelector } from 'react-redux';

//dynamic import lazy 
const MainLayout = react.lazy(()=> import("./layouts/MainLayout"))
const HomePage = react.lazy(()=> import("./pages/HomePage"))
const Problems = react.lazy(()=> import("./pages/Problems/Problems"))
const Login = react.lazy(()=> import("./pages/Login"))
const Register = react.lazy(()=> import("./pages/Register"))
const ProblemDetails = react.lazy(()=> import("./pages/Problems/ProblemDetails/ProblemDetails"))
const ProblemDescription = react.lazy(()=> import("./pages/Problems/Components/ProblemDescription"))
const ProblemSolutions = react.lazy(()=> import("./pages/Problems/Components/problemSolutions"))




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Suspense fallback={<Loader/>}><MainLayout/> </Suspense>}>
        <Route index element={<Navigate to={"home"} replace/>}/>
        <Route path='home' element={<Suspense fallback={<Loader/>}><HomePage/> </Suspense>}/>
        <Route path='problems' element={<Suspense fallback={<Loader/>}><Problems/> </Suspense>}/>
        <Route path='login' element={<Suspense fallback={<Loader/>}><Login/> </Suspense>}/>
        <Route path='register' element={<Suspense fallback={<Loader/>}><Register/> </Suspense>}/>
      </Route>
    
      <Route path='problems/:id' element={<Suspense fallback={<Loader/>}> <ProblemDetails/> </Suspense>}>
        <Route index element={<Navigate to={"description"} replace />} />
        <Route path='description' element={<Suspense fallback={<Loader/>}> <ProblemDescription/> </Suspense>}/>
        <Route path='solutions' element={<Suspense fallback={<Loader/>}> <ProblemSolutions/> </Suspense>}/>
      </Route>
    
    </>

  )
)

function App() {
  const { loading} = useSelector(state=>state.userInfo)
  return (
      <>
          <RouterProvider router={router}/>
          <Suspense>{loading && <Loader />}</Suspense> {/* global loading screen depend on state*/}
      </>

  );
}

export default App;
