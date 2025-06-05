'use client'
import Image from "next/image"
import { Button } from "./ui/button"

const LastPageBox = () => {
  return (
    <div className="flex justify-center">
      <div className="main w-full h-[398px] rounded-[72px] border border-[#1C212C] bg-[#1B182F]"
       style={{
    fill: 'linear-gradient(150deg, rgba(99, 102, 241, 0.80) 13.95%, rgba(99, 102, 241, 0.32) 35.58%, rgba(99, 102, 241, 0.00) 70.52%)',
    filter: ''
  }}
      >
        <div  className="bg-clip-text text-transparent mt-[75px]"
  style={{
    background: 'linear-gradient(90deg, #F9FAFB 1%, #E5E7EB 20.5%, #C7D2FE 50%, #E5E7EB 75.5%, #F9FAFB 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}>
<h1 className="text-center text-[40px] font-bold leading-[48px]">Got an idea? Let’s turn it into a vibe.</h1>
</div>
        <h3 className="text-white text-center mt-[33px] text-[24px] font-medium leading-[28px]">You hum it, we’ll build it. Start creating music your way.</h3> 
        <div className="flex justify-center w-full h-full mt-[67px] py-[11px] px-[16px] "> 
         <Button className='rounded-lg bg-gradient-to-b from-[#E9407F] to-[#B11550] shadow-inner shadow-white/16 w-[140px] h-[44px]'>Start for free</Button>       
         </div>
        </div>
   
    </div>
  )
}

export default LastPageBox
