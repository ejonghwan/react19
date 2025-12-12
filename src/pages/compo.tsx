import React, { useEffect, useRef } from 'react'
import { Button } from '../components/headless-ui/Button'

const Compo = () => {

   const btnRef = useRef(null)

   useEffect(() => {
      console.log('btnRef.current', btnRef.current)
   }, [])

   return (
      <div>
         <h2>Compo</h2>
         <Button variant='primary' ref={btnRef}>asdasd</Button>
      </div>
   )
}

export default Compo