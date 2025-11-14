import React from 'react'

interface Props {
   type: string;
}

const Input = ({ ...props }: Props) => {
   return (
      <div>
         <input {...props} />
      </div>
   )
}

export default Input