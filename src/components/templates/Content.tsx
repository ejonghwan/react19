import React from 'react'

interface Props {
   // children: React.ReactElement // 원시타입 비허용
   children: React.ReactNode // 원시타입 허용
}

const Content = ({ children }: Props) => {
   return (
      <div>
         {children}
      </div>
   )
}

export default Content