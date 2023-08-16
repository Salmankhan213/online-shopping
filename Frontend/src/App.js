import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Notfound from "./component/Notfound";
import './App.css'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function App() {


  return (
   <>
   <Router>
    <ToastContainer/>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="*" element={<Notfound/>}/>
    
   </Routes>
   </Router>


   
   </>
  )
}

export default App;
