import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Hobbies from './pages/Hobbies'
import './App.css'

function App() {
  return (
    <div className="site">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </div>
  )
}

export default App
