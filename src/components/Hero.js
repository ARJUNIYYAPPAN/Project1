import { LuSubtitles } from 'react-icons/lu';
import HeroImg from '../assets/Hero.png'
import { AiOutlineTwitter ,AiOutlineFacebook ,AiOutlineLinkedin, AiOutlineGithub  } from "react-icons/ai";
import { LiaLinkedin } from 'react-icons/lia';

export default function Hero(){
    const config ={
        subtitle: "I'm a Full-Stack Developer",
        social:{
             facebook:"https://www.facebook.com/arunarjun.arunarjun.319",
             linkedin:"https://www.linkedin.com/in/arjun-i-207807246",
             twitter:"https://x.com/arun01718",
             github:"https://github.com/ARJUNIYYAPPAN/ARJUNIYYAPPAN"
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'> 
            <h1 className=' text-white text-8xl font-hero-font py-5'>Hi, <br/>I'm Arjun <br></br>
            <p className='text-4xl py-3'>{config.subtitle}</p>
            </h1>

            <div className='flex'>
                <a href={config.social.facebook} className='pr-3 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='pr-3 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.twitter} className='pr-3 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href={config.social.github} className='hover:text-white'><AiOutlineGithub size={40} /></a>
            </div>
        </div>
        <img className='md:w-1/3 ' src={HeroImg}/>
    </section>
}