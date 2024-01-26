import {BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Counter from "./Counter";
import Service from "./Pages/Service";
import Effect from "./Reducer/React";
import Reducer from "./Reducer/Reducer";
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>


      <Route index element={<Home/>}   />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="counter" element={<Counter/>} />
      <Route path="service" element={<Service/>} />
  

    </Route>
   </Routes>
   <Effect/>
   <Reducer/>
   </BrowserRouter>
  )
}

