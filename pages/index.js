
import { useEffect } from 'react'
import Container from '../components/core/container'
import Header from '../components/utils/header'
import  Footer  from '../components/utils/footer'
export default function Home() {
  // console.log(process.env.DB_HOST)
 useEffect(()=>{
   document.title='playon - web music player'
 })
  return (
    <div  >
     

<Header/>
<Container/>
<Footer/>
    </div>
  )
}

