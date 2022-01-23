import { useContext, useEffect } from 'react'
import Container from '../components/core/container'
import Header from '../components/utils/header'
import  Footer  from '../components/utils/footer'
import  { SongItems } from '../hooks/context/songContext'
import Head from 'next/head'

export default function Home() {
  const {songContext}=useContext(SongItems)
  // console.log(process.env.DB_HOST)
 useEffect(()=>{
   document.title='playon - web music player'
 })
  return (
   
      <div  >
     
<Head>
<link rel="shortcut icon" href="/assets/images/playon.svg"/>
</Head>
     <Header/>
     <Container/>
     { songContext?<Footer/>:null}
     
         </div>
   
  )
}
