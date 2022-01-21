import { useEffect, useState } from 'react'
import  Songs   from        '../../constants/main.json'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export  default function    Container(){

    const   [song,setSong]=useState('')
    
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
            shadow-lg
            shadow-gray-300
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
                
                <div    onClick={()=>{setSong(index)}}
                 className='bg-white 
                 text-purple-800
                 rounded-full
                  w-10 h-10 
                  grid
                   place-items-center
                   shadow-lg
                   hover:scale-105
                   ease-in-out
                   active:scale-90
                   duration-300
                   shadow-gray-300
                   '>
                <PlayArrowIcon />
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