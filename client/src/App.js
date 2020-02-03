import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Routes></Routes>
                <Navbar></Navbar>
            </div>
        </Router>
    )
}

export default App
