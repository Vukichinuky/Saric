import Image from "next/image"
import Link from "next/link"
function Galerija() {
    return (
        <div className=" bg-gray-100 p-5 m-10  pt-1">
            <h4 className="text-center text-2xl sm:text-4xl text-slate-700 font-bold mt-20">Galerija</h4>
            <div className='flex flex-col gap-4'>

                <div className='flex  bg-[#F7F7FE] flex-col sm:flex-row sm:mx-30 mt-5 items-center p-5 rounded-2xl justify-evenly'>
                    <div>
                        <Image width={400} height={400} src={"/saric-deelgros-komerc-zvornik 1.png"} alt={""} />
                    </div>
                    <div className="sm:w-96 text-slate-900 w-22 ">
                        <h2 className="font-bold text-xl px-10 pb-10 sm:pt-0 pt-5 text-center">Prevoz robe</h2>
                        <p className=" mb-5">
                            Nasi kamioni su na raspolaganju Vama i Vasim potrebama.
                            Prevozimo sve do 20tona na relacije od preko 12000km ///
                        //////////////
                        </p>
                        <Link className='cursor-pointer  underline text-blue-300' href={"/kamioni"} >Saznaj Vise</Link>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row sm:mx-30 bg-[#F7F7FE] items-center p-10   rounded-2xl justify-evenly'>
                    <div>
                        <Image width={400} height={400} src={"/saric-deelgros-komerc-zvornik 1.png"} alt={""} />
                    </div>
                    <div className="sm:w-96 text-slate-900 w-22 ">
                        <h2 className="font-bold text-xl px-10 pb-10 sm:pt-0 pt-5 text-center">Prevoz robe</h2>
                        <p className=" mb-5">
                            Nasi kamioni su na raspolaganju Vama i Vasim potrebama.
                            Prevozimo sve do 20tona na relacije od preko 12000km ///
                        //////////////
                        </p>
                        <Link className='cursor-pointer  underline text-blue-300' href={"/kamioni"} >Saznaj Vise</Link>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row  sm:mx-30 items-center p-10 bg-[#F7F7FE] rounded-2xl justify-evenly '>
                    <div>
                        <Image width={400} height={400} src={"/saric-deelgros-komerc-zvornik 1.png"} alt={""} />
                    </div>
                    <div className="sm:w-96 p-10 w-22 ">
                        <h2 className="font-bold text-xl px-10 text-slate-900 pb-10 sm:pt-0 pt-5 text-center">Prevoz robe</h2>
                        <p className="text-slate-900 mb-5">
                            Nasi kamioni su na raspolaganju Vama i Vasim potrebama.
                            Prevozimo sve do 20tona na relacije od preko 12000km ///
                        //////////////
                        </p>
                        <Link className='cursor-pointer  underline text-blue-300' href={"/kamioni"} >Saznaj Vise</Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Galerija