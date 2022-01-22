import {  useContext, useState } from 'react'
import  Songs   from        '../../constants/main.json'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { SongItems } from '../../hooks/context/songContext';

export  default function    Container(){
    
const   {setContextSong}=useContext(SongItems)
    const   [song,setSong]=useState('')
    const   [pause,setPause]=useState(true)
    
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
                 text-purple-800
                 rounded-full
                  w-10 h-10 
                  grid
                   place-items-center
                   shadow-2xl
                   hover:scale-105
                   ease-in-out
                   active:scale-90
                   duration-300
                   shadow-gray-700
                   '>
                {index===song&&pause?
                <PauseIcon   
                 onClick={()=>{setPause(false)}}/>:
                <PlayArrowIcon 
                onClick={()=>setPause(true)} />}
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