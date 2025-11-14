import React from 'react'
import Input from '../atoms/Input'

const UserForm = () => {
   return (
      <div>
         <div>
            a :
            <Input type="text" />
         </div>
         <div>
            b :
            <Input type="text" />
         </div>
         <div>
            c :
            <Input type="text" />
         </div>
      </div>
   )
}

export default UserForm