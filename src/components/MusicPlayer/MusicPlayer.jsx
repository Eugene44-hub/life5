import React, { useEffect, useRef, useState } from 'react'
import song from "../../assets/Music/Zac Efron, Zendaya - Rewrite The Stars ( ).mp3"
import Play from "../../assets/images/play.svg"
import MusicPlay from "../../assets/images/musicPlay.png"

function MusicPlayer() {
    const AudioRef=useRef()
    const [playing,setPlaying]=useState(false)
useEffect(()=>{
    if(playing){
        AudioRef.current.play()
    }
    else{
        AudioRef.current.pause()
    }
},[playing])

  return (
    <div className=''>
    <audio ref={AudioRef} src={song}></audio>
    <button onClick={()=>setPlaying(!playing)} className={`${playing?"bg-red-500":""} border-2 border-white h-[50px] w-[50px] rounded-full`}><img src={MusicPlay} className="w-[20px] m-auto"/></button>
    </div>
  )
}

export default MusicPlayer