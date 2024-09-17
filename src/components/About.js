import AboutImg from '../assets/About.png'

export default function About(){

    const config = {

        line1:"Hi, I'm Arjun I, a passionate Full Stack Developer with a drive to create innovative and user-friendly digital solutions.",
        line2:"With a strong foundation in both front-end and back-end development, I excel in bridging the gap between design and functionality."

    }
    return <section className='flex flex-col md:flex-row bg-secondary p-5' id='about'>
        <div className=' py-5 md:w-1/2 '>
            <img  src={AboutImg}/>
        </div>
        

        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center text-white'>
               <h1 className='text-4xl border-b-2 mb-5 w-[170px] font-bold'>About Me</h1>
               <p className='pb-5'>{config.line1}</p>
               <p>{config.line2}</p>
           </div>
        </div>
    </section>

}