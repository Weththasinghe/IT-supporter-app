import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screens/homeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Supporters from "./screens/Form";
import LoginScreen from "./screens/LoginScreen";
import SupportList from "./screens/SupportList";
 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<HomeScreen />} />
       <Route path='/form' element={<Supporters />} />
       <Route path='/login' element={<LoginScreen />} />
       <Route path="/suplist" element={<SupportList />} />
      </Routes>
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
