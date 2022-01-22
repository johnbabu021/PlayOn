import {  createContext, useState } from "react"
export  const   SongItems=createContext('')
export  default function    SongContext({children}){
    const  [songContext,setContextSong]=useState(null)
    return(
        <SongItems.Provider value={{songContext,setContextSong}}>
            {children}
        </SongItems.Provider>
    )
}