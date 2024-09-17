import ecommerce from '../assets/ecomm.jpg'
import food from '../assets/food.jpg'
import blog from '../assets/blog.jpg'

export default function Projects(){
    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className='flex flex-col px-10 py-5'>
                <h1 className="text-4xl border-b-4 mb-5 w-[140px] font-bold ">Projects</h1>
                <p className=''>These are some of my best projects. I have built these with Full Stack materials. Check them out. </p>
            </div>    
        </div>
 
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative' >
                   <img className='h-[220px] w-[500px]' src={ecommerce}/>
                   <div className='project-description'>
                      <p className='text-center py-20 px-10'>Ecommerce Website.</p>
                   </div>
                </div>  

                <div className='relative'>
                   <img className='h-[220px] w-[500px]' src={food}/>
                   <div className='project-description'>
                      <p className='text-center py-20 Px-10'>Food Ecommerce website like Swiggy,Zomato,Cookr.</p>
                   </div>
                </div>    

                <div className='relative'>
                   <img className='h-[220px] w-[500px]' src={blog}/>
                   <div className='project-description'>
                      <p className='text-center py-20 Px-10'>Basic Blog Website .</p>
                   </div>
                </div>

            </div>    
        </div>
    </section>
}