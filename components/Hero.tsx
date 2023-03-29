import Image from "next/image"
import Link from "next/link"
function Hero() {
    return (
        <div className=" p-8 bg-[url('/bg.svg')] bg-cover bg-repeat ">
            <div className='flex sm:flex-row flex-col justify-center items-center '>
                <div className=" flex justify-center flex-col items-center">


                    <div className="animate-fade-in  ">
                        <h1 className="md:text-5xl  md:text-center  m-auto md:max-w-2xl  text-slate-100 md:leading-relaxed leading-normal font-sans text-4xl  font-bold ">Svjež proizvod, sigurna ambalaža - naše <span className="uppercase bold">papirne</span> vreće. </h1>
                        <p className="text-neutral-300 p-3 m-auto  text-center md:max-w-md mb-6 md:mt-5 font-sans">Savršeno rješenje za vašu papirnu ambalažu - visokokvalitetne papirne vreće koje čuvaju svježinu i kvalitetu vašeg proizvoda</p>
                    </div> <Link href={'localhost:300/'} > <p className="bg-teal-700  text-neutral-200 hover:text-slate-100 hover:bg-teal-900 mt-3 text-xl rounded-3xl md:py-4 py-3 px-4 md:px-6">Saznaj vise</p> </Link>
                </div>
                <div className=" mr-5 ">
                    <Image
                        className="  transition duration-300 ease-in-out hover:scale-110     rounded-3xl "
                        alt="ilustracija masine za stampanje "
                        src={'/../public/masina.png'}
                        width={1000}
                        height={1000}
                        priority />
                </div>
            </div>

        </div>
    )
}

export default Hero