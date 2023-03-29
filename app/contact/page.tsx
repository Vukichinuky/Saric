import EmailForm from '@/components/EmailForm';
import Link from 'next/link';
export default function Contact() {
    return (
        <div className='bg6 p-20'>
            <div className='flex bg-white  rounded-2xl justify-left items-center'>
                <div className='p-10'>
                    <h2 className='font-medium italic'>Pozovite nas</h2>
                    <p className='font-extralight italic'>Broj telefona: 0641234123</p>
                </div>
                <div className='p-10'>
                    <h2 className='font-medium italic'>Pronadji nas</h2>
                    <p className='font-extralight italic'>Adresa: Padjine 75412</p>
                </div>
                <div className='p-10'>
                    <Link target="_blank" href={'https://www.google.com/maps/place/Sari%C4%87+d.o.o./@44.5248559,19.1181675,19.29z/data=!4m15!1m8!3m7!1s0x47595e250a760f4b:0xe39f3f55de56fa39!2sPa%C4%91ine,+Bosnia+and+Herzegovina!3b1!8m2!3d44.5327808!4d19.1250449!16s%2Fm%2F0g9zcbs!3m5!1s0x47595e18696c35d5:0x3ac229315bf1c357!8m2!3d44.5249081!4d19.1184644!16s%2Fg%2F11c37kp45b'} >
                        <h3 className='text-blue-500 underline cursor-pointer'>Otvori mapu</h3>
                    </Link>
                </div>
            </div>
            <div className='p-10'>
                <EmailForm />
            </div>
        </div>
    )
}