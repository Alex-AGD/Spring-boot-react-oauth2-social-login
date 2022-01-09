import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/login/LoginForm";
import Header from "./components/navbar/Header";
import {Route, Routes} from "react-router-dom";
import React from "react";
import RegisterForm from "./components/registerForm/RegisterForm";
import OAuth2RedirectHandler from "./components/login/oauth2/OAuth2RedirectHandler";



const App =  (props) =>  {
  return (
    <div className="App">
        <Header  store={ props.store }/>
        <Routes>
            <Route path="/login" element={<LoginForm />}/>
            <Route path='/signup' element={<RegisterForm />}/>
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />}/>
        </Routes>
    </div>
  );
}

export default App;
