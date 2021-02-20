import React from "react"

const ExternalButton = ({ text, link, rounded, customBg }) => {

  return (
    <a
      className={
        ` 
          px-8 py-4
          ${rounded ? 'rounded-full' : 'rounded-lg'} 
          ${customBg ? 'transition duration-200 ease-in-out transform custom-bg text-white hover:-translate-y-1 hover:scale-105' : 'bg-white text-black'}
        `
      }
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  )
}

export default ExternalButton
