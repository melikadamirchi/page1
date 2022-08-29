import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Navbar from './components/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <div className=' bg-light'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/experience' element={<Experience/>}>Experience</Route>
          <Route path='/project' element={<Projects/>}>Projects</Route>
          <Route path='/about' element={<About/>}>About</Route>
          <Route path='/project/:id' element={<ProjectDisplay/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App