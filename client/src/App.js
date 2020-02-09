import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Routes from './routes'

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Routes />
                <Navbar />
            </div>
        </Router>
    )
}

export default App
