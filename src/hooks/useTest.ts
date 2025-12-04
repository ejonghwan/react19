import React, { useState } from 'react'

const useTest = () => {

    const [obj, setObj] = useState({ val1: "", val2: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setObj(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    return { obj, setObj, handleChange }
}

export default useTest;