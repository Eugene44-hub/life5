import React, { useEffect, useRef, useState } from 'react'
import song from "../../assets/Music/Zac Efron, Zendaya - Rewrite The Stars ( ).mp3"
import Play from "../../assets/images/play.svg"
import MusicPlay from "../../assets/images/musicPlay.png"

function MusicPlayer() {
    const AudioRef=useRef()
    const [playing,setPlaying]=useState(false)
const [duration,setDuration]=useState(40)

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
    <audio ref={AudioRef} onLoadedData={(e)=>{console.log(e.target.duration.toFixed())}}  onTimeUpdate={(e)=>{setDuration((e.target.currentTime/e.target.duration)*100)}} src={song}></audio>
    <button onClick={()=>setPlaying(!playing)} className={`${playing?"bg-red-500":""} border-2 border-white h-[50px] w-[50px] rounded-full`}><img src={MusicPlay} className="w-[20px] m-auto"/></button>
 <div className='mt-[10px]'> 
    <input type="range" value={duration}  />
</div>
    </div>
  )
}

export default MusicPlayer