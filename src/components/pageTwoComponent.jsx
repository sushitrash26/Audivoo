'use client'

import PageTwoCards from "./pageTwoCards"
import PageTwoText from "./pageTwoText"

const PageTwoComponent = () => {
  return (
    <div className="bg-[url('/Bg-Shapes_2.svg')] bg-[#050711]">
        <div className="w-full h-full flex justify-center items-center ">
             <PageTwoText/>
         </div>
         <div className="w-full h-200px mt-[40px]">
            <PageTwoCards/>
         </div>
    </div>
  )
}

export default PageTwoComponent


