import React, { useState } from 'react'
import WildLife from "../../assets/images/Wild-life-white 3.svg"
import Twitter from "../../assets/images/Twitter.svg"
import Facebook from "../../assets/images/facebook.svg"
import Instagram from "../../assets/images/instagram.svg"
import Play from "../../assets/images/play.svg"
import Hamburger from "../../assets/images/hamburger.svg"
import "./Nav.css"

const Navigations=["artist","services","discography","about","contact"]
const handles=[Twitter,Facebook,Instagram,Play]
function Nav() {
const [toggle,setToggle]=useState(false)

  return (
<div className='container p-5'>

  <div className='flex justify-between'>
    <img src={WildLife} alt="" />
    <img onClick={()=>setToggle(!toggle)} src={Hamburger}  />
  </div>

    <div className={`h-full ${toggle?"w-[215px]":"w-[0px]"} fixed bg-black overflow-hidden transition-all`}>
<img src={WildLife} className="mt-[130px] m-auto" alt="wildlife" />
<ul className='mt-[113px] text-white text-center'>
{Navigations.map((item,index)=>(<li key={index} className='leading-9'>
<button> {item}</button>
   
</li>))}    
</ul>
<div className='flex justify-center'>
{handles.map((item,index)=>(<img key={index} className='mx-4 mt-[50px]' src={item}/>))}
</div>
    </div>

<div className='text-white h-full m-auto flex'>
<p className='m-auto'>new single</p>
</div>



</div>
  )
}

export default Nav