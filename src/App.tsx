// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Test from './pages/test'
import styles from './css/global.module.scss'
import InterTest from './pages/interTest'
<<<<<<< HEAD
import Ani from './ani/ani'
=======
import Compo from './pages/compo'
import { useContext } from 'react'
import { TestCon } from './context/TestContext'
>>>>>>> refs/remotes/origin/master

function App() {
  // const [count, setCount] = useState(0)

  const ctx = useContext(TestCon)
  if (!ctx) { throw new Error('asdasd') }
  const { testC } = ctx;


  return (
    <>
      <div className={styles.app}>
<<<<<<< HEAD
        {/* <nav>
          <Link to="/">홈</Link> | <Link to="/about">소개</Link>
        </nav> */}
=======
        <nav>
          {testC ? '컨텍스트 티' : '컨텍스트 팔'}
          <Link to="/">홈</Link> | <Link to="/about">소개</Link>

        </nav>
>>>>>>> refs/remotes/origin/master

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/intertest" element={<InterTest />} />
<<<<<<< HEAD
          <Route path="/ani" element={<Ani />} />
=======
          <Route path="/compo" element={<Compo />} />
>>>>>>> refs/remotes/origin/master
        </Routes>
      </div>
    </>
  )
}

export default App
