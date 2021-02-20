import React from "react"
import { Link } from "gatsby"


const InternalButton = ({ text, path, primary, border, rounded }) => {

  return (
    <Link
      to={path}
      className={
        ` 
          px-8 py-4 
          ${border && primary ? 'border-2 border-primary' : ''} 
          ${border && !primary ? 'border-2 border-black' : ''} 
          ${primary ? 'bg-black text-primary' : 'text-black bg-primary'} 
          ${rounded ? 'rounded-full' : 'rounded-lg'} 
          ${primary ? 'hover:bg-primary hover:text-black' : 'hover:bg-black hover:text-primary'}
        `
      }
    >
      {text}
    </Link>
  )
}

export default InternalButton
