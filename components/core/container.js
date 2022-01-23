import  React   from    'react'
import {  useContext, useState } from 'react'
import  Songs   from        '../../constants/main.json'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { SongItems } from '../../hooks/context/songContext';
 function    Container({Havana}){
    
const   {setContextSong}=useContext(SongItems)
    const   [song,setSong]=useState('')
    const   [pause,setPause]=useState(true)
    
if(typeof window!=='undefined'&&document!=='undefined'){
    const   AudioContext=window.AudioContext||window.webkitAudioContext

    const    audioContext=new   AudioContext()
    // console.log(audioContext.state)
    audioContext.resume()
    const       audioElement=document.querySelector('audio')
    // console.log(audioElement)
   
    // audioElement.pause()

// const   track=audioContext.createMediaElementSource(audioElement)
// const   gainNode=audioContext.createGain();

// const   volumeControl=document.querySelector('#volume')
// volumeControl.addEventListener('input',()=>{
//     console.log(this.value  )
//     gainNode.gain.value=this.value
// },false)



// track.connect(audioContext.destination)

}


    return  (
<section   
 className="grid 
 gap-8 
 xl:grid-cols-4
 md:grid-cols-3 
sm:grid-cols-2
 ">
{
    Songs?.map((item,index)=>(

           <div  key={index}   className='grid place-items-center gap-4'>
                   {/* <input  type="range"    id="volume" min="0" max="2" value="1"   step="0.01"/> */}

                <div   className={
                    `
                    
                    w-40
            h-50
            rounded-full
            h-36
            bg-gray-100	
            grid
            place-items-center
            border-8
            border-zinc-200
            shadow-xl
            shadow-gray-200
            hover:scale-105
            ease-in
            active:scale-90
            duration-300
            
            ${song===index&&'    active:border-8    border-blue-400'}
            `
                }  >
                <div
                className='grid place-items-center'
                >
                
                <div    onClick={()=>{
                    setSong(index) 
                    setContextSong(index+1) }}
                 className='bg-white 
                 text-blue-500
                 rounded-full
                  w-10 h-10 
                  grid
                   place-items-center
                   shadow-2xl
                   hover:scale-105
                   ease-in-out
                   active:scale-90
                   duration-300
                   shadow-gray-800
                   '>
                {index===song&&pause?
                <PauseIcon   
                 onClick={()=>{
                    // if(audioContext.state ){
                        audioElement.pause()
                    
                    setPause(false)}}/>:
                <PlayArrowIcon 
                onClick={()=>{

                    // if(audioContext.state==='suspended'){
                        // audioContext.resume()
                        audioElement.play()
                
                setPause(true)
                }
                
                } />}
                <audio  preload='none' loop src={Havana}></audio>
                    </div>
                </div>
            
            </div>
            {item.name}
               </div>
        )
    )
}

</section>
    )
}

export  default React.memo(Container)