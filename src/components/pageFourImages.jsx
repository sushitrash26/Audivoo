'use client'
import Link from "next/link"
import { Button } from "./ui/button"
const PageFourImages = () => {
  return (
    <div className="flex justify-center gap-[24px] mt-[70px]">
      <div className="box w-[399px] h-[420px] bg-cover bg-no-repeat bg-center bg-gray-300 rounded-2xl border"
      style={{  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/bgone.png')" }}
      >
        <div className="top w-full h-[40%] "></div>
        <div className="btm w-full h-[60%] px-[10px] py-[10px]">
         <div className="btn flex gap-[12px] ">
            <Button className="text-[#24272F] text-[14px] font-medium leading-[20px] rounded-[8px] border border-[#B3B9EE] bg-[#D0D4F5]">Tips</Button>
            <Button className="text-white text-[14px] font-medium leading-[20px] py-[3px] px-[10px] bg-transparent rounded-[8px] border border-[#9495E5]">5 min read</Button>
         </div>
            <h1 className="w-[350px] text-white  text-[28px] font-bold leading-[34px]">How to Enhance Your <br/> Video Content</h1>
            <h3 className="text-white text-[14px] font-medium leading-[20px] mt-[15px] mb-[20px]">Discover strategies to elevate your video production quality.</h3>
            <Link href="google.com" className=" text-white text-[14px] font-bold leading-[20px]">Read more</Link>
        </div>

      </div>
      <div className="box w-[399px] h-[420px] bg-cover bg-no-repeat bg-center bg-gray-300 rounded-2xl border"
      style={{  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/bgtwo.jpg')" }}
      >
        <div className="top w-full h-[40%] "></div>
        <div className="btm w-full h-[60%] px-[10px] py-[10px]">
         <div className="btn flex gap-[12px] ">
            <Button className="text-[#24272F] text-[14px] font-medium leading-[20px] rounded-[8px] border border-[#B3B9EE] bg-[#D0D4F5]">Tips</Button>
            <Button className="text-white text-[14px] font-medium leading-[20px] py-[3px] px-[10px] bg-transparent rounded-[8px] border border-[#9495E5]">5 min read</Button>
         </div>
            <h1 className="w-[350px] text-white  text-[28px] font-bold leading-[34px]">How to Enhance Your <br/> Video Content</h1>
            <h3 className="text-white text-[14px] font-medium leading-[20px] mt-[15px] mb-[20px]">Discover strategies to elevate your video production quality.</h3>
            <Link href="google.com" className=" text-white text-[14px] font-bold leading-[20px]">Read more</Link>
        </div>

      </div>
      <div className="box w-[399px] h-[420px] bg-cover bg-no-repeat bg-center bg-gray-300 rounded-2xl border"
      style={{  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/bgthree.jpg')" }}
      >
        <div className="top w-full h-[40%] "></div>
        <div className="btm w-full h-[60%] px-[10px] py-[10px]">
         <div className="btn flex gap-[12px] ">
            <Button className="text-[#24272F] text-[14px] font-medium leading-[20px] rounded-[8px] border border-[#B3B9EE] bg-[#D0D4F5]">Tips</Button>
            <Button className="text-white text-[14px] font-medium leading-[20px] py-[3px] px-[10px] bg-transparent rounded-[8px] border border-[#9495E5]">5 min read</Button>
         </div>
            <h1 className="w-[350px] text-white  text-[28px] font-bold leading-[34px]">How to Enhance Your <br/> Video Content</h1>
            <h3 className="text-white text-[14px] font-medium leading-[20px] mt-[15px] mb-[20px]">Discover strategies to elevate your video production quality.</h3>
            <Link href="google.com" className=" text-white text-[14px] font-bold leading-[20px]">Read more</Link>
        </div>

      </div>
    </div>
  )
}

export default PageFourImages
