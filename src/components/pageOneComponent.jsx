"use client"
import Gradienttext from "@/components/gradienttext"
import Navbar from "@/components/navbar"
import Image from "next/image"
import Smalltext from "@/components/smalltext"
import Startbtn from "@/components/startbtn"
import Flex from "@/components/flex"
const PageOneComponent = () => {
  return (
    <div className="bg-[#050711] h-auto">
      <div className="main w-full text-white flex justify-center ">
        <Navbar />
      </div>
      <div className="w-full flex justify-center items-center h-full pt-[100px]">
        <div className="grad w-[50%] flex justify-center items-center">
          <Gradienttext />
        </div>
      </div>
      <div className="s-grad w-full flex justify-center items-center pt-[32px]">
        <Smalltext />
      </div>
      <div className="startbtn w-full flex justify-center items-center mt-[55px]">
        <Startbtn />
      </div>
      <div className="w-full flex justify-center mt-[43px] pb-[40px]">
        <Flex />
      </div>
    </div>
  );
}

export default PageOneComponent
