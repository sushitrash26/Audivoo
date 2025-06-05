'use client'

import { Button } from "./ui/button"

const PageFourBtn = () => {
  return (
    <div className="flex mt-[39px] justify-center gap-[12px]">
      <div className="main w-[529px] h-[40px] bg-[rgba(31,41,55,0.4)] rounded-[24px]">
        <ul className="w-full h-full flex gap-[12px] px-[4px] py-[4px] justify-center items-center">
            <Button className="rounded-[16px] border border-[]"
style={{
  background: 'linear-gradient(311deg, rgba(17, 24, 39, 0.48) 25.98%, rgba(31, 41, 55, 0.23) 44.98%, rgba(17, 24, 39, 0.48) 61.17%)'
}}>
   
    View All</Button>
            <Button>Content Tips</Button>
            <Button>Music Trends</Button>
            <Button>Creator Stories</Button>
        </ul>
      </div>
    </div>
  )
}

export default PageFourBtn
