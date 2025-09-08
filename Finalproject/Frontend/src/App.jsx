import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Helpus from "./pages/Helpus";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

 const  App = ()=> {

  return <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
         <Route path="/help" element={<Helpus/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
           <Route path="/register" element={<Register/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  
  </>

 }
 export default App;