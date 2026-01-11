// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Test from './pages/test';
import styles from './css/global.module.scss';
// import InterTest from './pages/interTest'
import Ani from './ani/ani';
import Ani_2 from './ani/ani_2';
import Ani_3 from './ani/ani_3';
// import Compo from './pages/compo'
import { useContext } from 'react';
import { TestCon } from './context/TestContext';

function App() {
  // const [count, setCount] = useState(0)

  const ctx = useContext(TestCon);
  if (!ctx) {
    throw new Error('asdasd');
  }
  // const { testC } = ctx;

  return (
    <>
      <div className={styles.app}>
        {/* <nav>
          <Link to="/">홈</Link> | <Link to="/about">소개</Link>
        </nav> */}

        <Link to="/ani">애니메이션</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/intertest" element={<InterTest />} /> */}
          <Route path="/ani" element={<Ani />} />
          <Route path="/ani_2" element={<Ani_2 />} />
          <Route path="/ani_3" element={<Ani_3 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
