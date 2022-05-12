import React from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./component/home";
import Profile from "./component/profile";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='profile'>Profile</Link>
            </nav>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
