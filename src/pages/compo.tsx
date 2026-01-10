import { useContext, useEffect, useRef } from 'react';
import { Button } from '../components/headless-ui/Button';
import Hx_Button, { BtnProvider } from '../components/styled-ui/Hx_Button';
import { TestCon } from '../context/TestContext';

const Compo = () => {
  const btnRef = useRef(null);
  // const ctx = useContext(ButtonContext)
  // if (!ctx) { throw new Error('z') }
  // const { btn } = ctx

  const ctx = useContext(TestCon);
  if (!ctx) {
    throw new Error('asdasd');
  }
  const { testC, setTestC } = ctx;

  useEffect(() => {
    console.log('btnRef.current', btnRef.current);
  }, []);

  const handle = () => {
    setTestC(prev => !prev);
  };

  return (
    <div>
      <h2>Compo</h2>
      {/* <Hx_Button>커스텀 버튼</Hx_Button> */}

      <BtnProvider>
        <Hx_Button>클릭</Hx_Button>
        {/* {btn} */}
      </BtnProvider>

      {testC ? 't??' : 'f??'}
      <Button variant="primary" ref={btnRef} onClick={handle}>
        원본 버튼{' '}
      </Button>
    </div>
  );
};

export default Compo;
