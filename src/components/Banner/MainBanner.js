import React from "react"
import ExternalButton from "../Button/ExternalButton"
import './MainBanner.css'

const MainBanner = ({ 
  overlay, 
  imageSrc, 
  title, 
  customTitle, 
  subtitle, 
  customSubtitle, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <div
      className="relative w-full overflow-hidden flex flex-col justify-center items-center"
      style={{
        background: overlay ? `linear-gradient(180deg,rgba(0,0,0,.6) 0,rgba(0,0,0,.6)) ,url(${imageSrc})` : `url(${ imageSrc })`,
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'bottom center',
        backgroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >

      <div className="flex flex-col px-2 md:px-32 mt-16 text-center max-w-screen-xl">
        <h1 className={`${customTitle ? 'custom-text' : 'text-bannerTextPrimary'} text-3xl sm:text-4xl md:text-5xl font-light`}>{title}</h1>
        <p className={`${customSubtitle ? 'custom-text' : 'text-bannerTextSecondary'} text-xl sm:text-2xl my-8`}>{subtitle}</p>
      </div>

      <ExternalButton 
        text={buttonText}
        link={buttonLink}
        customBg
        rounded
      />
    </div>
  )
}

export default MainBanner
