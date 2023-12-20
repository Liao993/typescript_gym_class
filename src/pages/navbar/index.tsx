//import { useState } from "react"
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopPage : boolean
  selectedPage: SelectedPage
  setSelectedPage: (value:SelectedPage) => void;
 
 }
 
const Navbar = ({isTopPage, selectedPage, setSelectedPage} : Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuTggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px")
  const navBackground = isTopPage ? "" : "bg-primary-100 drop-shadow-md"
  return (
    <nav>
      <div className= {`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>

            {/*Left Side */}
            <img src={Logo} alt="Logo" />

            {/*Right Side */}
            {isAboveMediumScreen ? (<div className={`${flexBetween} w-full`}>
            {/* Home/  */}
              <div className={`${flexBetween} gap-8 text-sm`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

              </div>

            {/*Sign In */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>) : (<button className="rounded-full bg-secondary-500 p-2" onClick={()=>setIsMenuToggled(!isMenuTggled)}>
              <Bars3Icon className="b-6 h-6 text-white"/>
            </button>)}
          </div>
        </div>
      </div>
      {/*Mobile Menu Toggle */}
     
        {!isAboveMediumScreen && isMenuTggled && (<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/*Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={()=> setIsMenuToggled(!isMenuTggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/*Menu Items */}
          <div className="ml-[30%] flex flex-col gap-10 text-2xl">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

              </div>
        </div>)}
     
    </nav>
  )
}

export default Navbar