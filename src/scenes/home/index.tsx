import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePagerGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import useMediaQuery from '@/hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'


type Props = {
  setSelectedPage: (value:SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
  return (
    <section id='homes' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>

      {/*Image and Main Header */}
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'> 
        {/*Main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* Headings */}
          <div className='md:-mt-20'>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt="Home Page Text" />
              </div>
            </div>
            <p className='mt-8 text-sm'>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            {/* Actions */}
            <div className='mt-8 flex  items-center gap-8 '>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink 
                  className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' 
                  onClick={ () => setSelectedPage(SelectedPage.ContactUs)}
                  href={`#${SelectedPage.ContactUs}`}
                  >
                  
                <p className='text-md'>Learn More</p>
              </AnchorLink>
            </div>
          </div>
          
        </div>
        {/*Image Graphic */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomePagerGraphic} alt='Home page graphic'/>
        </div>
      </div>
      {/*Sponsor */}
      {isAboveMediumScreen && (
        <div className='h-1/6 w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6' >
            <div className='flex w-2/3 items-center justify-between gap-8'>
              <img alt='redbull' src={SponsorRedBull}/>
              <img alt='forbes' src={SponsorForbes}/>
              <img alt='fortune' src={SponsorFortune}/>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home