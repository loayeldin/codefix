import './App.css';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import react, { Suspense, useEffect} from 'react';
import Loader from "./Components/Loader";
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserData } from './features/AuthSlice';
import useAuthPolling from './hooks/useAuthPolling';

//dynamic import lazy 
const MainLayout = react.lazy(()=> import("./layouts/MainLayout"))
const HomePage = react.lazy(()=> import("./pages/HomePage"))
const Problems = react.lazy(()=> import("./pages/Problems/Problems"))
const Login = react.lazy(()=> import("./pages/Login"))
const Register = react.lazy(()=> import("./pages/Register"))
const Faq = react.lazy(()=> import("./pages/Faq"))
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
        <Route path='faq' element={<Suspense fallback={<Loader/>}><Faq/> </Suspense>}/>
      </Route>
    
      <Route path='problems/:id' element={<Suspense fallback={<Loader/>}> <ProtectedRoute><ProblemDetails/></ProtectedRoute> </Suspense>}>
        <Route index element={<Navigate to={"description"} replace />} />
        <Route path='description' element={<Suspense fallback={<Loader/>}> <ProblemDescription/> </Suspense>}/>
        <Route path='solutions' element={<Suspense fallback={<Loader/>}> <ProblemSolutions/> </Suspense>}/>
      </Route>
    
    </>

  )
)

function App() {
  const { loading,userData} = useSelector(state=>state.userInfo)
  const dispatch = useDispatch()

  // get user data from cookies when user reload the page
    useEffect(() => {
    const storedUser = Cookies.get("user");
    const idToken = Cookies.get("idToken");

    if (idToken && storedUser ) {
      if(!userData){
        dispatch(setUserData(JSON.parse(storedUser)));
      }
    }
  }, []); 

  // detect cookie expiration every 5 minutes && auto login
  useAuthPolling()


  return (
      <>
          <RouterProvider router={router}/>
          <Suspense>{loading && <Loader />}</Suspense> {/* global loading screen depend on state*/}
      </>

  );
}

export default App;




function ProtectedRoute ({children}){
  const {userData} = useSelector(state=>state.userInfo)
  if(!userData){
    return <Navigate to="/login" replace/>
  }

  return children;
}
