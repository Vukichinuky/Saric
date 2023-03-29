import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaRetweet, FaArrowDown } from 'react-icons/fa';

const currentYear = new Date().getFullYear();


function Footer() {

    return (
        <div className='flex flex-col bg-[#112D35]'>
            <div className='flex items-center justify-center p-4'>
                <FaArrowDown className='w-8 h-8 animate-bounce fill-slate-500' />                <p className='p-2 font-bold text-slate-500'>ZAPRATITE NAS </p>
            </div>
            <hr />
            <div className='flex items-center p-4  gap-4 justify-center'>
                <FaFacebook className='fill-slate-500 w-16 h-16' />
                <FaInstagram className='fill-slate-500 w-16 h-16' />
                <FaRetweet className='fill-slate-500 w-16 h-16' />
            </div>
            <hr />
            <div className='p-4 cursor-pointer flex justify-evenly items-center text-slate-300'>
                <div>
                    <h2>Firma</h2>
                    <p className='text-slate-500'>O nama</p>
                    <p className='text-slate-500'>Kontakt</p>
                    <h3 className='mt-2'>Proizvodi</h3>
                    <p className="text-slate-500">Papirne vrece</p>
                    <p className="text-slate-500">Prevoz robe</p>
                    <p className="text-slate-500">Stocna hrana</p>
                </div>

                <div className='p-10 hidden sm:block max-w-md  text-center text-slate-600'>
                    <p>© {currentYear} Saric D.O.O. Sva prava zadržana. Mi smo specijalizovani za proizvodnju visokokvalitetnih vreća i pouzdan transport. Naš tim stručnjaka koristi najnovije tehnologije i materijale kako bi osigurao da naši proizvodi i usluge zadovoljavaju najviše standarde. Kontaktirajte nas za više informacija o našim proizvodima i uslugama.</p>
                </div>
            </div>
            <div className='sm:hidden'>
                <hr />
                <div className='p-10  text-center text-slate-600'>
                    <p>© {currentYear} Saric D.O.O. Sva prava zadržana. Mi smo specijalizovani za proizvodnju visokokvalitetnih vreća i pouzdan transport. Naš tim stručnjaka koristi najnovije tehnologije i materijale kako bi osigurao da naši proizvodi i usluge zadovoljavaju najviše standarde. Kontaktirajte nas za više informacija o našim proizvodima i uslugama.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer