import React from 'react'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Post from './pages/Post'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'
import { PostProvider } from './context/PostContext'

function App() {
  return (
    <AuthProvider>
    <PostProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/post' element={
            <ProtectedRoute>
              <Post/>
            </ProtectedRoute>
            } /> 
          <Route path='/about' element={
            <ProtectedRoute>
              <About/>
            </ProtectedRoute>
          } />
        </Routes>
        <Footer/>
      </Router>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
