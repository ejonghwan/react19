
import React, { useEffect, useState } from 'react'
import Input from '../atoms/Input'

const UserForm = () => {

   const [d, setD] = useState({ input1: '', input2: '', input3: '' });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setD(prev => ({ ...prev, [e.target.name]: e.target.value }))
   }

   useEffect(() => {
      console.log(d)
   }, [d])

   return (
      <div>
         <br /><br /><br />
         <div>
            a :
            <Input type="text" name="input1" onChange={(e) => handleChange(e)} />
         </div>
         <div>
            b :
            <Input type="text" name="input2" onChange={handleChange} />
         </div>
         <div>
            c :
            <Input type="text" name="input3" onChange={handleChange} />
         </div>
      </div>
   )
}

export default UserForm