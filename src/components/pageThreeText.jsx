'use client'

const PageThreeText = () => {
  return (
    <div className="w-[768px] ">
        <div className="main-text text-transparent bg-clip-text "
        style={{
    backgroundImage:
      "linear-gradient(90deg, #F9FAFB 1%, #E5E7EB 20.5%, #C7D2FE 50%, #E5E7EB 75.5%, #F9FAFB 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
    >
      <h1 className="w-full  h-[48px] text-center  text-[40px] font-bold leading-[48px]">Fresh Drops for You</h1>
      </div>
      <h3 className="w-full h-[26px] my-[16px] text-[#838AA7] text-center  text-[20px] font-medium leading-[26px]">Discover the latest music trends and snippet here!</h3>
    </div>
  )
}

export default PageThreeText
