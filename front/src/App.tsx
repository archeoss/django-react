import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomersList from "./customers/CustomersList";
import CustomerCreateUpdate from "./customers/CustomerCreateUpdate";
import './App.css';

const BaseLayout = () => (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Django-React App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"  aria-expanded="false"
                    aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">CUSTOMERS</a>
                    <a className="nav-item nav-link" href="/customers">CREATE CUSTOMER</a>
                </div>
            </div>
        </nav>
        <div className="content">
            <Routes>
                <Route path="/" element={<CustomersList />} />
                <Route path="/customers/:pk" element={<CustomerCreateUpdate />} />
                <Route path="/customers/" element={<CustomerCreateUpdate />} />
            </Routes>
        </div>
    </div>
)

function App(props)
{
    return (
        <BrowserRouter>
            <BaseLayout />
        </BrowserRouter>
    );
}
export default App;