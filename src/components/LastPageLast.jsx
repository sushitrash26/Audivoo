'use client'

import Image from "next/image"
import Link from "next/link"

const LastPageLast = () => {
  return (
    <div className="w-full">
        <div className="w-full h-[350px] flex">
            <div className="left h-[100%] w-[50%] ">
            <div className="test flex mx-[100px] my-[70px] gap-[10px]">
                <Image src='/logo.svg' width={60} height={60} alt="logo"/>
                <Image src='/mainlogo.svg' width={130} height={50}/>
            </div>
            <h3
            className="text-[#8A94A6] text-[20px] font-medium leading-[26px] mx-[100px] my-[44px]"
            >Discover the future of AI-generated music with Audivo. Unleash your creativity and let our intelligent music engine bring your ideas to life — effortlessly and instantly.</h3>
            </div>
            <div className="right h-[100%] w-[50%]  pr-[30px] bg-[url('/bgfinal.png')] ">
                <div className="ltop flex w-full h-[80%] gap-[37px] justify-end items-center ">
                 <Link href="google.com" className="text-[#D7DAE0] text-[18px] font-medium leading-[28px]">FAQ</Link>
                 <Link href="google.com" className="text-[#D7DAE0] text-[18px] font-medium leading-[28px]">Blog</Link>
                 <Link href="google.com" className="text-[#D7DAE0] text-[18px] font-medium leading-[28px]">About Us</Link>
                 <Link href="google.com" className="text-[#D7DAE0] text-[18px] font-medium leading-[28px]">License</Link>
                 <Link href="google.com" className="text-[#D7DAE0] text-[18px] font-medium leading-[28px]">Support</Link>
                </div>
                <div className="lbtm flex w-full h-[20%]  gap-[16px] justify-end">
                    <Link href="google.com"><Image src='/x.svg' width={25} height={25}></Image></Link>
                    <Link href="google.com"><Image src='/i.svg' width={25} height={25}></Image></Link>
                    <Link href="google.com"><Image src='/t.svg' width={25} height={25}></Image></Link>
                    <Link href="google.com"><Image src='/a.svg' width={25} height={25}></Image></Link>
                    <Link href="google.com"><Image src='/m.svg' width={25} height={25}></Image></Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LastPageLast
