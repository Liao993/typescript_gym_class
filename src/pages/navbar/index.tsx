//import { useState } from "react"
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"

const Navbar = () => {
  const flexBetween = "flex items-center justify-between"
  return (
    <div className= {`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>

          {/*Left Side */}
          <img src={Logo} alt="Logo" />

          {/*Right Side */}
          <div className={`${flexBetween} w-full`}>
          {/* Home/  */}
            <div className={`${flexBetween} gap-8 text-sm`}>
              <p>Home</p>
              <p>Benefits</p>
              <p>Our Classes</p>
              <p>Contact Us</p>

            </div>

          {/*Sign In */}
            <div className={`${flexBetween} gap-8 text-sm`}>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar