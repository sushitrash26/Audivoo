'use client'
import Image from "next/image";

const PageThreeCards = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-[50px]">
        <div className=" h-[308px] w-[398px] rounded-[32.034px] border border-[#535456] bg-[#413B74] flex overflow-hidden">
         <div className="left h-[100%] w-[60%] ">
            <div className="part-one flex justify-center items-center ">
             <Image src="/logoone.svg"
                    width={220}
                    height={220}
                    className="py-[24px] px-[10px]"
             ></Image>
            </div>
            <div className="part-two ml-[20px] ">
            <h4 className="text-[#D0D4F5]  text-[13.536px] font-medium leading-[21.056px] ">Ambient</h4>
            <h1 className="text-white text-[24.063px] font-bold leading-[28.575px]">Lofi Chill</h1>
            </div>
         </div>
         <div className="right h-[100%] w-[40%]  flex justify-end items-start">
          <Image
            src="/playlogo.svg"
            width={70}
            height={70}
            className="py-[24px] px-[10px]"
          ></Image>
         </div>
        </div>
        <div className=" h-[308px] w-[398px]  rounded-[32px] border border-[#6B6B7D] bg-[#1E273E] flex overflow-hidden -translate-y-16"
        style={{
    boxShadow: `
      0px 131.458px 36.808px 0px rgba(85, 86, 88, 0.00),
      0px 84.133px 33.804px 0px rgba(85, 86, 88, 0.01),
      0px 47.325px 28.545px 0px rgba(85, 86, 88, 0.05),
      0px 21.033px 21.033px 0px rgba(85, 86, 88, 0.09),
      0px 5.258px 11.268px 0px rgba(85, 86, 88, 0.10)
    `
  }}
        >
         <div className="left h-[100%] w-[60%] ">
            <div className="part-one flex justify-center items-center ">
             <Image src="/logotwo.svg"
                    width={220}
                    height={220}
                    className="py-[24px] px-[10px]"
             ></Image>
            </div>
            <div className="part-two ml-[20px] ">
            <h4 className="text-[#D0D4F5]  text-[13.536px] font-medium leading-[21.056px] ">Ambient</h4>
            <h1 className="text-white text-[24.063px] font-bold leading-[28.575px]">Lofi Chill</h1>
            </div>
         </div>
         <div className="right h-[100%] w-[40%]  flex justify-end items-start">
          <Image
            src="/playlogo.svg"
            width={70}
            height={70}
            className="py-[24px] px-[10px]"
          ></Image>
         </div>
        </div>
        <div className=" h-[308px] w-[398px] rounded-[32.034px] border border-[#535456] bg-[#413B74] flex overflow-hidden">
         <div className="left h-[100%] w-[60%] ">
            <div className="part-one flex justify-center items-center ">
             <Image src="/logothree.svg"
                    width={220}
                    height={220}
                    className="py-[24px] px-[10px]"
             ></Image>
            </div>
            <div className="part-two ml-[20px] ">
            <h4 className="text-[#D0D4F5]  text-[13.536px] font-medium leading-[21.056px] ">Ambient</h4>
            <h1 className="text-white text-[24.063px] font-bold leading-[28.575px]">Lofi Chill</h1>
            </div>
         </div>
         <div className="right h-[100%] w-[40%]  flex justify-end items-start">
          <Image
            src="/playlogo.svg"
            width={70}
            height={70}
            className="py-[24px] px-[10px]"
          ></Image>
         </div>
        </div>
      
      </div>
    </div>
  );
}

export default PageThreeCards
