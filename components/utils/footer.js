import { useContext } from "react"
import  { SongItems } from "../../hooks/context/songContext"

export      default function    Footer(){
    const       {songContext}=useContext(SongItems)
    console.log(songContext)
    return  (
        <footer    className={`
        w-full
        bg-white
        sticky
        shadow-2xl
        shadow-gray-400
      h-14
      bottom-0  
      

        
        `}>
            ashdf
        </footer>
    )
}