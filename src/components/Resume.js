import ResumeImg from '../assets/Respic.jpg'

export default function Resume(){
    const config = {
        link:'https://drive.google.com/file/d/1pYWgINqBZiuJQuvfn8IK5PUvMSrrhkJP/view?usp=drive_link'
    }


    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>

        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center text-white'>

               <h1 className='text-4xl border-b-2 mb-5 w-[135px] font-bold'>Resume</h1>
               <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
               
           </div>
        </div>
    </section>

}