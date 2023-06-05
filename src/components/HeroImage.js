


import girl from './assets/girl.jpg'
import './css/style.css'

const HeroImage = () => {
  return (
    <div className='heroImage'>
     <img src={girl} alt="" />
       <svg 
       viewBox="0 0 493 72" 
       fill="none" 
       xmlns="http://www.w3.org/2000/svg"> 
            <filter 
              id="turbulence" 
              x="0%"
              y="0%" 
              width="100%" 
              height="100%">
                <feTurbulence 
                  id="fluid" 
                  baseFrequency="1" 
                  numOctaves="1" 
                  type="turbulence" 
                  result="turbulence"/>
                <feDisplacementMap 
                  scale="50" 
                  in2="turbulence"
                  in="SourceGraphic"/>
                
            <animate 
               href="#fluid" 
               attributeName="baseFrequency" 
               dur="2.8s" 
               begin="0s"
               keyTimes="0;1"
               values=".0060;0"  />
            </filter>
       </svg>
       
                
    </div>
  )
}

export default HeroImage
