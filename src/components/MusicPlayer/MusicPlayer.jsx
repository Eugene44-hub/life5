import React, { useEffect, useRef, useState } from 'react'
import song from "../../assets/Music/Zac Efron, Zendaya - Rewrite The Stars ( ).mp3"
import Play from "../../assets/images/play.svg"
import MusicPlay from "../../assets/images/musicPlay.png"

function MusicPlayer() {
    const AudioRef=useRef()
    const [playing,setPlaying]=useState(false)
const [duration,setDuration]=useState(0)
const rangeRef=useRef()
console.log(duration.toFixed())
const onChange=(e)=>{
 AudioRef.current.currentTime= (AudioRef.current.duration/100)*e.target.value
    console.log(e.target.value)
}
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
    <audio ref={AudioRef}  onLoadedData={(e)=>{console.log(e.target.duration.toFixed())}}  onTimeUpdate={(e)=>{setDuration((e.target.currentTime/e.target.duration)*100)}} src={song}></audio>
    <button onClick={()=>setPlaying(!playing)} className={`${playing?"bg-red-500":""} border-2 border-white h-[50px] w-[50px] rounded-full`}><img src={MusicPlay} className="w-[20px] m-auto"/></button>
 <div className='mt-[10px]'> 
    <input ref={rangeRef} type="range" value={duration} className="slider" onChange={onChange}/>
</div>
    </div>
  )
}

export default MusicPlayer