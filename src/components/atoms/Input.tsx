import React from 'react'

interface Props {
   type: string;
   name: string;
   // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
   onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ ...props }: Props) => {
   return (
      <div>
         <input {...props} />
      </div>
   )
}

export default Input