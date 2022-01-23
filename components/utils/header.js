// import { useContext } from "react"
// import SongContext, { SongItems } from "../../hooks/context/songContext"





export  default function    Header(){
// const {songContext}=useContext(SongItems)
// console.log(song)
    return  (
        <div    className="flex items-center  h-20 mb-4  shadow-xl shadow-gray-200 backdrop-blur-sm sticky top-0 z-10">

<h1 className='pl-8 text-2xl text-gray-600 w-40 flex justify-between items-center '>
  <img src="/assets/images/playon.svg"  className="w-8 h-8"  alt=""/>
  PlayOn
</h1>   
        </div>
    )
}