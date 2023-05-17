import Image from 'next/image'
import Link from 'next/link'
import EmailForm from './Emailform'


function ZastoNasKontakt() {
    return (
        <div className='bg-[#F7F7FE] m-10 rounded-2xl'>
            <div className='flex flex-col md:flex-row p-5 justify-evenly items-center'>
                <div className='flex items-center pt-10 justify-center flex-col '>
                    <h2 className=' text-center font-bold italic text-2xl '>
                        Zasto izabrati nas?
                    </h2>
                    <p className='italic text-xs p-10'>
                        Za razliku od ostalih konkurenata mi mislimo o nasim kupcima
                    </p>
                    <Link href={'localhost:300/'} > <p className="bg-teal-700 w-52 text-center text-neutral-200 hover:text-slate-100 hover:bg-teal-900 mt-3 text-xl rounded-3xl md:py-4 py-1 px-2 md:px-6">Saznaj vise</p> </Link>

                </div>
                <div className='p-5'>
                    <Image className='transition duration-300 ease-in-out hover:scale-110' src='/logo.png' width={200} height={200} alt={'Slika vrece za brasno'} />
                </div>
            </div>
            <div className=' p-10 sm:p-20'>


            </div>

            <EmailForm />

        </div >
    )
}

export default ZastoNasKontakt