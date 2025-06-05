'use client'
import Image from "next/image"

const PageFiveMain = () => {
  return (
    <div className='w-full h-[700px]  flex bg-[url("/flex.png")] no-repeat bg-cover'>
       
        <div className="left h-[full] w-[50%]  pt-[225px]">
            
            <div className='bg-gradient-to-r from-[#F9FAFB] from-[1%] to-[#F9FAFB] to-[100%] text-transparent bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex justify-center'>
            <h1 className='text-[48px] font-bold leading-[58px]'>Read from our <br/> satisfied clients.</h1>
            </div>
            <h3 className='text-[#838AA7] text-[20px] font-medium leading-[26px] text-start ml-[200px] mt-[20px]'>Elevate your content effortlessly with Audivo. Our platform empowers you to generate music, add subtitles, and experiment with sound.</h3>
       
        </div>
        <div className="right grid grid-cols-2 w-[50%] h-full">
            <div className='w-full h-full  mt-[50px]'>
                <div className="testone w-[337px] h-[261px]  m-[15px] rounded-[16px] border border-[#9A9DBA] bg-[linear-gradient(180deg,_var(--primary-950,_#1B182F)_0%,_#050711_100%)]">
                    <div className='w-[170px] h-[62px]  mx-[24px] my-[26px] flex gap-[12px] justify-center'>
                        <Image src='/app.svg' width={60} height={60}></Image>
                        <div className="w-full h-full text-[16px] leading-[24px] text-white">
                            <h1>@theo.talks</h1>
                            <h1>Podcast Host</h1>
                        </div>
                    </div>
                    <div className="w-[286px] h-[72px] mx-[24px] text-white  text-[16px] font-medium leading-[24px]">
                        Audivo is literally my audio cheat code. Subtitles, music, remixing — all in one place
                    </div>
                </div>
                <div className="testtwo w-[337px] h-[261px]  m-[15px] rounded-[16px] border border-[#9A9DBA] bg-[linear-gradient(180deg,_var(--primary-950,_#1B182F)_0%,_#050711_100%)]"></div>
            </div>
            <div className='w-full h-full  mt-[50px]'>
                <div className="testthree w-[337px] h-[342px]  m-[15px] rounded-[16px] border border-[#9A9DBA] bg-[linear-gradient(180deg,_var(--primary-950,_#1B182F)_0%,_#050711_100%)]">
                  
                </div>
                <div className="testfour w-[337px] h-[261px]  m-[15px] rounded-[16px] border border-[#9A9DBA] bg-[linear-gradient(180deg,_var(--primary-950,_#1B182F)_0%,_#050711_100%)]">

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default PageFiveMain
