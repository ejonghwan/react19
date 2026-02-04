import React from 'react'
import { useTestConProvider } from '../context/TestContext'

const Ani_4_compo = () => {

    const { testC, setTestC } = useTestConProvider()
    const handleCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
        setTestC(prev => !prev)
    }


    return (
        <div>

            <button type='button' onClick={handleCLick}>context {testC ? 'true' : 'false'}</button>
        </div>
    )
}

export default Ani_4_compo