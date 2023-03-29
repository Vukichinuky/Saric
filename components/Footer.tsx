import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaRetweet, FaArrowDown } from 'react-icons/fa';

const currentYear = new Date().getFullYear();


function Footer() {

    return (
        <div className='flex flex-col bg-[#112D35]'>
            <div className='flex items-center justify-center p-4'>
                <FaArrowDown className='w-8 h-8 animate-bounce fill-white' />                <p className='p-2 text-slate-100'>ZAPRATITE NAS </p>
            </div>
            <hr />
            <div className='flex items-center p-4  gap-4 justify-center'>
                <FaFacebook className='fill-blue-900 bg-white rounded-full w-16 h-16' />
                <FaInstagram className=' bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl fill-white w-16 h-16' />
                <FaRetweet className='fill-blue-900 w-16 h-16' />
            </div>
            <hr />
            <div className='p-4 text-slate-300'>
                <h2>Firma</h2>
                <p className='text-slate-500'>O nama</p>
                <p className='text-slate-500'>Kontakt</p>
                <h3 className='mt-2'>Proizvodi</h3>
                <p className="text-slate-500">Papirne vrece</p>
                <p className="text-slate-500">Prevoz robe</p>
                <p className="text-slate-500">Stocna hrana</p>


            </div>
            <hr />
            <div className='p-10  text-center text-slate-600'>
                <p>© {currentYear} Saric D.O.O. Sva prava zadržana. Mi smo specijalizovani za proizvodnju visokokvalitetnih vreća i pouzdan transport. Naš tim stručnjaka koristi najnovije tehnologije i materijale kako bi osigurao da naši proizvodi i usluge zadovoljavaju najviše standarde. Kontaktirajte nas za više informacija o našim proizvodima i uslugama.</p>
            </div>
        </div>
    )
}

export default Footer