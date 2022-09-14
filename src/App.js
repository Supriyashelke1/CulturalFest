import "./App.css";
// //  import axios  from "axios";
import Registration from "./Registration";
import React from "react";
 import AddFestivalRegistration from "./AddFestivalRegistration";
import AddFestival from "./AddFestival";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import Pay from "./components/Pay";
import QrPay from "./components/QrPay";




import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavCompo from "./components/NavCompo";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Component } from "react";
import Contact from "./components/Contact";
// import Register from "./components/Register";
// import SignIn from "./components/SignIn";
import GaneshaFest from "./components/GaneshaFest";
import Navratri from "./components/Navratri";
import Diwali from "./components/Diwali";
import BreakLunch from "./components/BreakLunch";
// import FestivalRegisteration from "./components/FestivalRegistration";
import Footer from "./components/Footer";
import "font-awesome/css/font-awesome.min.css";
import ganeshafest from "./components/GaneshaFest"
import Explore from "./components/Explore";
import AdminRegistration from "./AdminRegistration";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavCompo/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/ganeshafest" element={<GaneshaFest/>}/>
            <Route path="/navratri" element={<Navratri/>}/>
            <Route path="/diwali" element={<Diwali/>}/>
            <Route path="/breaklunch" element={<BreakLunch/>} />
            <Route path="/AddFestivalRegistration" element={<AddFestivalRegistration/>} />
            <Route path="/ganeshafest" element={<GaneshaFest/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/AdminLogin" element={<AdminLogin/>} />
            <Route path="/AdminRegistration" element={<AdminRegistration/>} />
            <Route path="/AddFestival" element={<AddFestival/>} />
            <Route path="/Pay" element={<Pay/>} />
            <Route path="/QrPay" element={<QrPay/>} />





          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


