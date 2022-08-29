import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import '../Style/Footer.css'

function Footer() {
  return (
    <div className='footer bg-dark'>
        <div className=' row socialMedia flex-row col'>
           <a href="https://www.instagram.com/melika.damirchi" className='col-4'><InstagramIcon/></a> 
           <a href="https://www.linkedin.com/in/melikadamirchi" className='col-4'><LinkedInIcon/></a> 
           <a href="https://t.me/damirchimelika" className='col-4'><TelegramIcon/></a> 
        </div>
        <div className='row'> <p>This site belongs to Mel</p></div>
       
    </div>
  )
}

export default Footer