// import React, { useState } from 'react'
import useTest from '../hooks/useTest';

const Test = () => {
  // const [obj, setObj] = useState({ val1: "", val2: "" })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setObj(prev => ({ ...prev, [e.target.name]: e.target.value }))
  // }

  const { obj, handleChange } = useTest();

  return (
    <>
      <input type="text" name={'val1'} value={obj.val1} onChange={handleChange} />
      <input type="text" name={'val2'} value={obj.val2} onChange={handleChange} />
      val1: {obj.val1}
      val2: {obj.val2}
    </>
  );
};

export default Test;
