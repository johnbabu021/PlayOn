import SongContext from '../hooks/context/songContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  
  <SongContext>

<Component {...pageProps} />
  </SongContext>)
 
}

export default MyApp
