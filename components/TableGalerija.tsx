import Image from "next/image"

export default function TableGalerija() {
    return (
        <div className="mt-20 bg-slate-50 rounded-xl  ">
            <h1 className="text-center font-bold text-xl p-2 text-slate-500">Kako nasa proizvodnja izgleda</h1>
            <div className=" p-4 flex-wrap flex justify-center items-center gap-6">
                <Image className=" flex-1 transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/img_3016.jpg"} alt={"slika masine"} />
                <Image className="flex-1  transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/img_3017.jpg"} alt={"slika masine"} />
                <Image className="flex-1  transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/img_3018.jpg"} alt={"slika masine"} />

                <Image className="flex-1  transition duration-300 ease-in-out hover:scale-150 " width={200} height={200} src={"/img_3015.jpg"} alt={"slika masine"} />
                <Image className="  transition duration-300 ease-in-out hover:scale-75 " width={200} height={200} src={"/img_2991.jpg"} alt={"slika masine"} />
                <Image className="  transition duration-300 ease-in-out hover:scale-75 " width={200} height={200} src={"/img_2992.jpg"} alt={"slika masine"} />

            </div>

        </div>
    )
}