import { useEffect, useState } from 'react'
import  Songs   from        '../../constants/main.json'

export  default function    Container(){

    // const   [song,setSong]=useState('')
    // useEffect(()=>{
    //     setSong(Songs.json())
    // },[Songs,song])
    // console.log(song)
    return  (
<section   
 className="grid 
 gap-4 
 grid-cols-4 

 ">
{
    Songs?.map((item,index)=>(
            <div key={index}  className='
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
            shadow-zinc-500
            hover:scale-105
            ease-in
            duration-300
            
            
            '    >
                hello
            
            </div>
        )
    )
}

</section>
    )
}