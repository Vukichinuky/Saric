'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import dynamic from 'next/dynamic';
import Partneri from '@/components/Partneri';
import NestoONama from '@/components/NestoONama';
import ZastoNasKontakt from '@/components/ZastoNasKontakt';
import Misija from '@/components/Misija';
import Galerija from '@/components/Galerija';
import Faq from '@/components/Faq';
import AnimatedPage from "../components/AnimatedPage";

{  /*const MyComponent = dynamic(
  () => import('../components/Curasel'),
  { ssr: false }
); */}
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <div >
        {/*} <AnimatedPage >*/}
        <Hero />
        {  /* <MyComponent /> */}
        <Partneri />
        <NestoONama />
        <ZastoNasKontakt />
        <Misija />
        <Galerija />
        <Faq />
        {/* </AnimatedPage>*/}

      </div>   </main >
  )
}
