'use client'

import PageThreeCards from "./pageThreeCards"
import PageThreeText from "./pageThreeText"
import { Button } from "./ui/button"

const PageThreeComponent = () => {
  return (
    <div className="bg-[#050711]"
    style={{
    borderRadius: '72px 72px 0px 0px',
    background: 'linear-gradient(170deg, #071223 7.45%, #070B11 95.48%)',
  }}
    >
    <div className="bg-[url('/fresh_drops.png')] bg-cover  py-[20px]">
        <div className="main flex justify-center items-center ">

        
      <PageThreeText/>
      </div>
      <div className="pt-[150px]">
      <PageThreeCards/>
      </div>
      <div className="btn flex justify-center mt-[10px]">
        <Button className="w-[140px] h-[44px] py-[11px] px-[16px] "
        style={{
    background: 'linear-gradient(180deg, #E9407F 0%, #B11550 100%)',
    boxShadow: 'inset 0px 1px 0px rgba(255, 255, 255, 0.16)',
  }}
        > Explore all</Button>
      </div>

    </div>
    </div>

  )
}

export default PageThreeComponent
