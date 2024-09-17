export default function Contact(){
    const config={
        Email:'arjunarun@gmail.com',
        Phone:'91+ 9047835059'
    }
    return <section id="contact" className='flex flex-col  bg-primary px-20 py-32 text-white'>
        <div className='flex flex-col items-center'>

            <h1 className='flex  text-4xl border-b-2 mb-10 w-[135px] font-bold '>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, Please Contact me.</p>
            <p className="py-2"><span className="font-bold">Email:</span>{config.Email}</p>
            <p className="py-2"><span className="font-bold">Phone:</span>{config.Phone} </p>



        </div>
    </section>

}