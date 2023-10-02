import React from 'react'

const Button = ({title,style}) => {
  return (
    <button className={`${style} text-lg w-[100px] h-10 mx-1 rounded text-white`}>{title}</button>
  )
}

export default Button