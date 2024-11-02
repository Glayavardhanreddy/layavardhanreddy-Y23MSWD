import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Faculty from './components/Faculty';
import TimeTable from './components/TimeTable';
import Courses from './components/Courses';

function App() {
    return (
        <Router>
            <div>
                {/* Top bar with ERP SYSTEM */}
                <header className="top-bar">
                    <h1>ERP SYSTEM</h1>
                </header>

                {/* Sidebar navigation */}
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/faculty">Faculty</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/time-table">Time Table</Link></li>
                    </ul>
                </nav>
                
                {/* Main content */}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/faculty" element={<Faculty />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/time-table" element={<TimeTable />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
