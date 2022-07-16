import { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Home from "./Home";
import Contact from "./Contact";
import { Routes, Route, Navigate } from 'react-router-dom';

function Main(props : any)
{
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contact />} />
                {/* <Navigate to="/home" /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default Main;