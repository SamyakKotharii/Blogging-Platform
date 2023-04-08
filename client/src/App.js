import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs'
import MainHeader from "./MainHeader"
import Products from "./pages/Products"
import PostPage from './pages/PostPage';
function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/blog/:id" element={<PostPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
 }

export default App;