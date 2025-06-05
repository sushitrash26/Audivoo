'use client'
import Gradienttext from "@/components/gradienttext"
import Navbar from "@/components/navbar"
import Image from "next/image"
import Smalltext from "@/components/smalltext"
import Startbtn from "@/components/startbtn"
import Flex from "@/components/flex"
import PageOneComponent from "@/components/pageOneComponent"
import PageTwoComponent from "@/components/pageTwoComponent"
import PageThreeComponent from "@/components/pageThreeComponent"
import PageFourComponent from "@/components/pageFourComponent"
import LastPageComponent from "@/components/LastPageComponent"


const page = () => {
  return (
    <>
    <div className="bg-[#050711]">
      <PageOneComponent/>
      <PageTwoComponent/> 
      <PageThreeComponent/>
      <PageFourComponent/>
      <LastPageComponent/>
      </div>
    </>
  )
}

export default page
