import { useContext } from "react"
import  { SongItems } from "../../hooks/context/songContext"
import  Songs from '../../constants/main.json'
import { Slider } from "@mui/material"
import { styled } from '@mui/material/styles';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
export      default function    Footer(){
    const PrettoSlider = styled(Slider)({
        color: '#3d3d3d',
        
        height: 2,
        '& .MuiSlider-track': {
          border: 'none'
        },
        '& .MuiSlider-thumb': {
          height: 10,
          width: 10,
          backgroundColor: '#3d3d3d',
          border: '2px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: '#3d3d3d',
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#3d3d3d',
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          '&:before': { display: 'none' },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        },
      });
    const       {songContext}=useContext(SongItems)
    console.log(songContext)
    return  (
        <footer    className={`
        w-full
        bg-gray-100
        sticky
        shadow-2xl
        shadow-gray-400
      h-14
      bottom-0  
      flex
      justify-around
      items-center
      

        
        `}>
            {Songs[songContext-1].name}
           <section className="flex justify-center items-center gap-6">
               <p   className="text-xs">0.00</p>
               <PrettoSlider
    className="w-60"
        aria-label="pretto slider"
        defaultValue={20}
      /></section>
            
<div    className="
flex
gap-4
align-center
justify-center
">
    <VolumeUpIcon   className="
    justify-self-end
    text-lg text-gray-600"/>
    <PrettoSlider
    className="w-20"
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
</div>

        </footer>
    )
}