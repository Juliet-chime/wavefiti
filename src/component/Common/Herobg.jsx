import React from 'react'

const Herobg = ({img,children}) => {
  return (
    <div
      className={`h-120 w-full flex border rounded-medium bg-cover bg-center md:bg-center lg:bg-bottom-right bg-no-repeat object-contain`}
            style={{
              backgroundImage: `url(${img})`,
            }}
    >{children}</div>
  )
}

export default Herobg