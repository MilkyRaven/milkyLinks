import React from 'react'
import Link from 'next/link';
import { FaGithubAlt, FaDiscord, FaTwitch, FaTwitterSquare, FaTiktok, FaKiwiBird, FaEnvelopeOpen, FaEnvelopeOpenText} from "react-icons/fa";

const gitHub = "https://github.com/MilkyRaven"
const discord = "https://discord.gg/wQJ4vNA82m";
const twitch = "https://www.twitch.tv/milky_kiwi_dev";
const twitter = "https://twitter.com/milky_kiwi_dev"
const tiktok = "https://www.tiktok.com/@milky_kiwi_dev"
const portfolio = "https://milky-kiwi-portfolio.fly.dev/"
const mail = "mailto:milkykiwidev@gmail.com"

export default function LinkIcons() {
  return (
    <div className='iconbox shadow-pop-br slide-in-top'>
      <div><Link href={gitHub}><FaGithubAlt/></Link></div>
      <div><Link href={twitter}><FaTwitterSquare></FaTwitterSquare></Link></div>
      <div><Link href={tiktok}><FaTiktok/></Link></div>
      <div><Link href={discord}><FaDiscord/></Link></div>
      <div><Link href={twitch}><FaTwitch/></Link></div>
      <div><Link href={portfolio}><FaKiwiBird/></Link></div>
      <div><Link href={mail}><FaEnvelopeOpenText/></Link></div>
    </div>
  )
}
