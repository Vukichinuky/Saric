import Image from "next/image"

export default function TableGalerija() {
    return (
        <div className="mt-20  bg-slate-50 rounded-xl  ">
            <h1 className="text-center font-bold text-xl p-2 text-slate-500">Kako nasa proizvodnja izgleda</h1>
            <div className=" p-4 flex-wrap flex justify-center items-center gap-6">
                <Image className=" flex-1 transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/IMG_3016.JPG"} alt={"slika masine"} />
                <Image className="flex-1  transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/IMG_3017.JPG"} alt={"slika masine"} />
                <Image className="flex-1  transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/IMG_3018.JPG"} alt={"slika masine"} />

                <Image className="flex-1  transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/IMG_3015.JPG"} alt={"slika masine"} />
                <Image className=" flex-1 transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/IMG_2991.JPG"} alt={"slika masine"} />
                <Image className=" flex-1 transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/IMG_2992.JPG"} alt={"slika masine"} />

            </div>

        </div>
    )
}