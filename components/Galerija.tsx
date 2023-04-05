import Image from "next/image"
import Link from "next/link"
function Galerija() {
    return (
        <div className="flex items-center justify-center">
            <div className=" bg-gray-100 max-w-4xl rounded-2xl p-5 m-10  pt-1">
                <h4 className="text-center text-2xl sm:text-4xl text-slate-700 font-bold mt-10">Galerija</h4>
                <div className='flex flex-col gap-4'>
                    <div className='flex  bg-[#F7F7FE] flex-col sm:flex-row sm:mx-30 mt-5 items-center p-5 rounded-2xl justify-between'>
                        <div>
                            <Image width={300} height={300} src={"/saric-deelgros-komerc-zvornik 1.png"} alt={""} />
                        </div>
                        <div className="sm:w-96 text-slate-900 p-12 w-22 ">
                            <h2 className="font-bold text-xl px-10 pb-10 sm:pt-0 pt-5 text-center">Prevoz robe</h2>
                            <p className=" mb-5">
                                Nasi kamioni su na raspolaganju Vama i Vasim potrebama.
                                Prevozimo sve do 20tona na relacije od preko 12000km
                            </p>
                            <Link className='cursor-pointer  underline text-blue-300' href={"/PrevozRobe"} >Saznaj Vise</Link>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:mx-30 bg-[#F7F7FE] items-center p-10   rounded-2xl justify-between'>
                        <div>
                            <Image className=" m-4 rounded-xl rotate-90" width={200} height={200} src={"/IMG_2991.JPG"} alt={""} />
                        </div>
                        <div className="sm:w-80 w-22  ">
                            <h2 className="font-bold text-xl px-10 pb-10 sm:pt-0 pt-5 text-center">Stocna hrana</h2>
                            <p className=" mb-5">
                                Bavimo se nabavkom i isporukom stocne hrane <br />
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, commodi!
                            </p>
                            <Link className='cursor-pointer  underline text-blue-300' href={"/StocnaHrana"} >Saznaj Vise</Link>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row  sm:mx-30 items-center p-10 bg-[#F7F7FE] rounded-2xl justify-between '>
                        <div>
                            <Image className="rotate-90 m-4 rounded-xl" width={200} height={200} src={"/IMG_2992.JPG"} alt={""} />
                        </div>
                        <div className="sm:w-96 p-12 w-22 ">
                            <h2 className="font-bold text-xl px-10 text-slate-900 pb-10 sm:pt-0 pt-5 text-center">Papirna ambalaza</h2>
                            <p className="text-slate-900 mb-5">
                                Papirna ambalaza velicina od 65cm do 200cm
                            </p>
                            <Link className='cursor-pointer  underline text-blue-300' href={"/PapirnaAmbalaza"} >Saznaj Vise</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galerija