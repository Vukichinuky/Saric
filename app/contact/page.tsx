import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapPin } from 'react-icons/fa';
export default function Contact() {
    return (
        <div className=' '>
            <div className='flex gap-10 flex-col sm:flex-row justify-evenly items-start p-10'>
                <div className='  '>
                    <Link href={'https://www.google.com/maps/place/Sari%C4%87+d.o.o./@44.5249081,19.1162757,17z/data=!3m1!4b1!4m6!3m5!1s0x47595e18696c35d5:0x3ac229315bf1c357!8m2!3d44.5249081!4d19.1184644!16s%2Fg%2F11c37kp45b'}>
                        <Image src={'/mapaslika.jpg'} className='rounded-xl ' alt={'slika sa mape'} height={700} width={400} />
                    </Link>
                </div>
                <div className='flex flex-col bg-[#F7F7FE] text-slate-700 rounded-xl shadow-inner p-5 shadow-gray-200  justify-center'>
                    <div className='flex items-center justify-center p-4'>
                        <h1 className='text-xl font-medium italic'>Upoznajte nas</h1>
                    </div>
                    <div className='flex py-2 items-center justify-left'>
                        <FaPhone />
                        <p className='pl-4'>+387 65 12 12 234</p>
                    </div>
                    <div className='flex py-2 items-center justify-left'>
                        <FaEnvelope />
                        <p className='pl-4'>primer@saric.com</p>
                    </div>
                    <div className='flex py-2 items-center justify-left'>
                        <FaMapPin />
                        <p className='pl-4'>Padjine 350, 75400 Zovrnik</p>
                    </div>
                </div>

            </div>
        </div>
    )
}