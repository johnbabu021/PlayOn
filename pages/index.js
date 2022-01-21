
import { useEffect } from 'react'
import Container from '../components/core/container'
import Header from '../components/utils/header'

export default function Home() {
  // console.log(process.env.DB_HOST)
 useEffect(()=>{
   document.title='playon - web music player'
 })
  return (
    <div  className=' pl-8' >
     

<Header/>
<Container/>
    </div>
  )
}

