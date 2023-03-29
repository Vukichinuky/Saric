import Link from 'next/link'
import React from 'react'

function Faq() {
    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-evenly items-center'>
                <div className='flex p-10 flex-col gap-4'>
                    <h2 className='text-2xl font-bold '>FAQ (Pitanja i odgovori)</h2>
                    <p className='font-semibold text-lg'>Najcesca pitanja i odgovori</p>
                    <Link className='bg-teal-700 py-4 px-3 text-center rounded-2xl font-bold text-slate-100' href={'/kontakt'}>Postavi nam pitanje</Link>
                    <p className='italic text-slate-300'>**Pitanja nasih klijenata na koje mi odgovaramo</p>
                </div>
                <div className='grid p-4 grid-cols-1 sm:max-w-lg max-w-xs sm:grid-cols-2 sm:grid-rows-2'>
                    <div className=' flex items-left font-semibold justify-center flex-col'>
                        <p>Zasto se bavite ovim poslom</p>
                        <div className='flex items-center pl-0 p-3 justify-center'>
                            <div className='rounded-full m-4 flex items-center justify-center p-8 w-5 h-5 text-center text-2xl bg-slate-200'>
                                <p >1</p>
                            </div>
                            <p className='text-xs'>Bavimo se iz tih i ih razloga</p>
                        </div>
                    </div>
                    <div className=' flex items-left  font-semibold justify-center flex-col'>
                        <p>Koliko imate zaposlenih </p>
                        <div className='flex items-center pl-0 p-3  justify-center'>
                            <div className='rounded-full m-4 flex items-center justify-center p-8 w-5 h-5 text-center text-2xl bg-slate-200'>
                                <p >2</p>
                            </div>
                            <p className='text-xs'>  Imamo preko 50 zaposlenih u nasim objektima</p>
                        </div>
                    </div>
                    <div className=' flex items-left font-semibold justify-center flex-col'>
                        <p>Zasto se bavite ovim poslom</p>
                        <div className='flex items-center  p-3 pl-0  justify-center'>
                            <div className='rounded-full m-4 flex items-center justify-center p-8 w-5 h-5 text-center text-2xl bg-slate-200'>
                                <p className='' >3</p>
                            </div>
                            <p className='text-xs'> Jer zbog asda asd asd asd </p>
                        </div>
                    </div>
                    <div className=' flex  items-left font-semibold justify-center flex-col'>
                        <p>Neko random pitanje</p>
                        <div className='flex items-center p-3 pl-0 justify-center'>
                            <div className='rounded-full m-4 flex items-center justify-center p-8 w-5 h-5 text-center text-2xl bg-slate-200'>
                                <p >4</p>
                            </div>
                            <p className='text-xs '> I neki odgovor asd asd asd </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq