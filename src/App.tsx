//import { useState } from "react";
import Navbar from "@/pages/navbar"

import { SelectedPage } from "@/shared/types";
import { useState, useEffect } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopPage, setIsTopPage] = useState<boolean>(true)

  function handleScroll():void{
    if(window.scrollY === 0){
      setIsTopPage(true)
      setSelectedPage(SelectedPage.Home)
    } else {
      setIsTopPage(false)
    }
  }

  useEffect(() => { window.addEventListener("scroll", handleScroll); return()=> window.removeEventListener("scroll", handleScroll)},[])

  return (
    <div className="app bg-gray-20">
      <Navbar isTopPage = {isTopPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>      
    </div>
  );
}

export default App;
