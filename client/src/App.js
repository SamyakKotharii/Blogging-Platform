import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs'
import MainHeader from "./MainHeader"
import Products from "./pages/Products"
import PostPage from './pages/PostPage';
import Subscription from './pages/Subscription';
import Signup from './components/Signup';
import Login from './pages/Login';
import ErrorPage from './components/ErrorPage';
import { Logout } from './components/Logout';
import { createContext } from 'react';
import { useReducer } from 'react';
import { initialState,reducer } from './reducer/UseReducer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Disclaimer from './components/Disclaimer';
import Refund from './components/Refund';
import FAQPage from './components/FAQ';
import  Admin  from './pages/Admin';
import Adminblogs from './components/Adminblogs';
import UpdateBlog from './components/UpdateBlog';
export const UserContext = createContext();
const Routing = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index  element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/blogs" element={<Adminblogs/>}/>
          <Route path="/admin/update/blog/:id" element={<UpdateBlog/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/disclaimer" element={<Disclaimer/>}/>
          <Route path="/refund" element={<Refund/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/blog/:id" element={<PostPage/>}/>
          <Route path="/Subscription" element={<Subscription/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Routing/>
      </UserContext.Provider>
    </>
  );
};

export default App;

// import './App.css';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Blogs from './pages/Blogs'
// import MainHeader from "./MainHeader"
// import Products from "./pages/Products"
// import PostPage from './pages/PostPage';
// import Subscription from './pages/Subscription';
// import Signup from './components/Signup';
// import Login from './pages/Login';
// import ErrorPage from './components/ErrorPage';
// import { Logout } from './components/Logout';
// import { createContext } from 'react';

// const App= () => {
//   return (<>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainHeader/>}>
//           <Route index element={<Home/>}/>
//           <Route path="/blogs" element={<Blogs/>}/>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/Products" element={<Products/>}/>
//           <Route path="/blog/:id" element={<PostPage/>}/>
//           <Route path="/Subscription" element={<Subscription/>}/>
//           <Route path="/logout" element={<Logout/>}/>
//           <Route path="/*" element={<ErrorPage />} />
//         </Route>
    
//       </Routes>
//     </BrowserRouter>
//   </>
//   );
//  };
// export default App