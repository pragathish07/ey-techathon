import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Education from './pages/Education';
import Budget from './pages/Budget';
import Community from './pages/Community';
import Investments from './pages/Investments';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="flex">
                    <Sidebar />
                    <div className="flex-1">
                      <Navbar />
                      <div className="p-6">
                        <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/education" element={<Education />} />
                          <Route path="/budget" element={<Budget />} />
                          <Route path="/community" element={<Community />} />
                          <Route path="/investments" element={<Investments />} />
                        </Routes>
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}