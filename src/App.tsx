//import { useState } from "react";
import Navbar from "@/scenes/navbar"
import Homes from "@/scenes/home"
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourclasses";
import ContactUs from "@/scenes/contactus";
import Footer from "@/layouts/Footer"
import { SelectedPage } from "@/shared/types";
import { useState, useEffect } from "react";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Homes);
  const [isTopPage, setIsTopPage] = useState<boolean>(true)

  function handleScroll():void{
    if(window.scrollY === 0){
      setIsTopPage(true)
      setSelectedPage(SelectedPage.Homes)
    } else {
      setIsTopPage(false)
    }
  }

  useEffect(() => { window.addEventListener("scroll", handleScroll); return()=> window.removeEventListener("scroll", handleScroll)},[])

  return (
    <div className="app bg-gray-20">
      <Navbar isTopPage = {isTopPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
      <Homes setSelectedPage={setSelectedPage}/>   
      <Benefits setSelectedPage={setSelectedPage}/> 
      <OurClasses/>
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
