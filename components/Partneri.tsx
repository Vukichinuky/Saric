import Link from 'next/link'
import React from 'react'

function Partneri() {
    return (
        <div className=''>
            <h1 className='text-center mt-28  font-semibold text-lg md:text-xl text-gray-300'>Partneri</h1>
            <div className='flex  justify-between items-center md:p-20 font-bold p-10 md:text-3xl text-gray-400'>
                <Link href={'https://www.nortonabrasives.com/en-us/sandpaper-sheets'}>
                    <h3 className='hover:text-teal-700 cursor-pointer'>Norton Austrija</h3>
                </Link>
                <Link href={'https://www.google.com/search?q=w%26h+ad+2360%2F16&sxsrf=APwXEdcQvwI2TwlHz9jolq8kksmFFslNwQ%3A1680109239068&source=hp&ei=t24kZMjOApHIgQbf75aACQ&iflsig=AOEireoAAAAAZCR8xwA7jPHOA593s5tlR3h1_c2Ea0__&ved=0ahUKEwiIhoLTzoH-AhURZMAKHd-3BZAQ4dUDCAg&uact=5&oq=w%26h+ad+2360%2F16&gs_lcp=Cgdnd3Mtd2l6EANQAFgAYIsDaABwAHgAgAF1iAF1kgEDMC4xmAEAoAECoAEB&sclient=gws-wiz'}>
                    <h3 className='hover:text-teal-700 cursor-pointer'>W&H AD 2360/16</h3>
                </Link>
                <Link href={'https://www.google.com/maps/place/Mlin+Trio/@44.4708513,19.1265106,15z/data=!4m2!3m1!1s0x0:0xac773f1fdfc2b379?sa=X&ved=2ahUKEwia5YeyzoH-AhVz_rsIHdCUBIcQ_BJ6BAhIEAg'}>
                    <h3 className='hover:text-teal-700 cursor-pointer'>Mlin Trio</h3>
                </Link>
                <Link href={'https://www.google.com/maps/place/Mlin+Produkt+Bijeljina/@44.7855178,19.2792293,17z/data=!3m1!4b1!4m6!3m5!1s0x475be98aed5c1b53:0xff037b226131ed8e!8m2!3d44.785514!4d19.281418!16s%2Fg%2F11hdy209cq'}>
                    <h3 className='hover:text-teal-700 cursor-pointer'>Mlin Produkt</h3>
                </Link>

            </div>
        </div>
    )
}

export default Partneri