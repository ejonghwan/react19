// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Test from './pages/test'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <Link to="/">홈</Link> | <Link to="/about">소개</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </>
  )
}

export default App
