
import PageFourBtn from './pageFourBtn'
import PageFourImages from './pageFourImages'
import PageFourText from './pageFourText'
import { Button } from './ui/button'

const PageFourComponent = () => {
  return (
    <div>
      <PageFourText/>
      <PageFourBtn/>
      <PageFourImages/>
      <div className='flex justify-center items-center mt-[55px]'>
        <Button className="w-[140px] h-[44px] py-[11px] px-[16px] rounded-[8px] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)]"
        style={{ background: 'linear-gradient(180deg, #E9407F 0%, #B11550 100%)' }}
        >Explore All</Button>
      </div>
    </div>
  )
}

export default PageFourComponent
