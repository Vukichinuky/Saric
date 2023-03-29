
import Image from "next/image"
import Link from "next/link"
import { motion, spring } from "framer-motion"
import { useInView } from "framer-motion"
function Hero() {
    return (

        <div className='flex sm:flex-row p-8 bg1 bg-cover bg-repeat flex-col justify-center items-center '>
            <div className=" flex justify-center flex-col items-center">

                <motion.div className="  "
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
                >
                    <div className="animate-fade-in text-shadow ">
                        <h1 className="md:text-5xl  md:text-center text-white  m-auto md:max-w-2xl   md:leading-relaxed leading-normal font-sans text-4xl  font-bold ">Svjež proizvod, sigurna ambalaža - naše <span className="uppercase bold">papirne</span> vreće. </h1>
                        <p className="text-neutral-200 p-3 m-auto  text-center md:max-w-md mb-6 md:mt-5 font-sans">Savršeno rješenje za vašu papirnu ambalažu - visokokvalitetne papirne vreće koje čuvaju svježinu i kvalitetu vašeg proizvoda</p>

                    </div> <Link className="flex  justify-center" href={'/onama'} > <p className="bg-teal-700  text-neutral-200 hover:text-slate-100 hover:bg-teal-900 mt-3 text-xl rounded-3xl md:py-4 py-3 text-center w-44">Saznaj vise</p> </Link>
                </motion.div>
            </div>

            <div className=" mr-5 ">
                <Image
                    className="  transition duration-300 ease-in-out hover:scale-110     rounded-3xl "
                    alt="ilustracija masine za stampanje "
                    src={'/masina.png'}
                    width={1000}
                    height={1000}
                    priority />
            </div>
        </div>

    )
}

export default Hero