import Image from 'next/image'
import Link from 'next/link'
import EmailForm from './EmailForm'


function ZastoNasKontakt() {
    return (
        <div className='bg-violet-50 rounded-2xl mx-52 py-10'>
            <h1 className='text-center text-3xl font-semibold p-4 '>Posaljite nam email!</h1>
            <EmailForm />

        </div >
    )
}

export default ZastoNasKontakt