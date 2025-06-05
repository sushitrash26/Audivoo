'use client'
import Image from "next/image"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <>
     <div className="nav h-[56px] w-[1024px] border border-white overflow-hidden mt-[19px] rounded-[16px] bg-[linear-gradient(90.19deg,_#111827_0%,_rgba(31,41,55,0.48)_54.02%,_#111827_100.03%)] flex justify-between items-center">
            <div className="logo">
                <Image
                    className=" mx-3"
                    src="/logo.svg"
                    alt="Vercel Logo"
                    width={35}
                    height={35}
                />
            </div>
            <div className="options flex">
                <ul className="flex gap-10">
                    <li>Generate Music</li>
                    <li>Music Labs</li>
                    <li>Subtitles</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="btns flex mr-[20px] gap-[12px]">
                <Button className="rounded-[8px] w-[70px] h-[32px] px-[12px] py-[10px] bg-[linear-gradient(358deg,rgba(31,41,55,0.64)_1.45%,#1F2937_102.89%)] border-[#1F2937] ">Sign In</Button>
                <Button className="w-[80px] h-[32px] px-[10px] py-[16px] rounded-[8px] bg-[linear-gradient(180deg,#E9407F_0%,#B11550_100%)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.16)] ">Register</Button>
            </div>
          </div>
    </>
  )
}

export default Navbar
