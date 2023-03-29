import Link from 'next/link'
import Image from 'next/image'
function Misija() {
    return (
        <div className='flex flex-col sm:flex-row justify-evenly items-center'>
            <div className='bg-[#F7F7FE] m-10 rounded-2xl p-10'>
                <h1 className=' text-2xl p-10'>“Prijatni ljudi uvek spremni da pomognu Prijatni ljudi uvek spremni da pomognuPrijatni ljudi uvek spremni da pomognu”</h1>  <p className='italic text-xs'>anonimni komentar naseg klijenta</p>          </div>
            <div className='bg-[#F7F7FE] m-10 rounded-2xl p-10'>
                <h2 className='p-5 text-xl font-bold'>
                    Misija-Vizija-Buducnost
                </h2>
                <ul className='text-xs list-disc text-left'>
                    <li className='  p-3'>Nasa misija je lorem4...</li>
                    <li className='pl-3'>Vizija nase firme se zasniva...</li>
                    <li className='p-3'>Buducnost je takva i takva...</li>
                </ul>
                <Link className='cursor-pointer underline text-blue-300' href={'/misija'}>Pogledaj vise..</Link>
            </div>
        </div>
    )
}

export default Misija