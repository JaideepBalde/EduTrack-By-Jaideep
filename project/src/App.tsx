import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Layout/Header';
import { Home } from './pages/Home';
import { Government } from './pages/Government';
import { Private } from './pages/Private';
import { Dashboard } from './pages/Dashboard';
import { Planner } from './pages/Planner';
import { Login } from './pages/Login';
import { ExamDetail } from './pages/ExamDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/government" element={<Government />} />
            <Route path="/private" element={<Private />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/exam/:id" element={<ExamDetail />} />
          </Routes>
        </main>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'var(--toast-bg)',
              color: 'var(--toast-color)',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;