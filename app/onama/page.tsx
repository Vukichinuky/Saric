import { FaShoppingBag, FaTruckMoving, FaHotdog } from "react-icons/fa"


export default function Onama() {
    return (
        <div>

            <div className=" text-center">
                <h1 className=" text-base pt-20 italic text-[#215564]">
                    o nama
                </h1>
                <p className="text-2xl p-4 sm:text-4xl italic font-medium">Saznajte vise o nama i cime se bavimo u tekstu ispod</p>
            </div>

            <div className=" flex text-xl font-medium p-10 flex-col sm:flex-row justify-evenly">
                <div className="flex flex-col p-5 items-center justify-center">
                    <FaShoppingBag className="h-14 fill-[#d2ac7e] w-14 " /> <h3 className="p-4">Papirna ambalaza</h3>
                </div>
                <div className="flex flex-col p-5 items-center justify-center">
                    <FaTruckMoving className="h-14 fill-[#d2ac7e] w-14" /> <h3 className="p-4">Transport robe</h3>
                </div>
                <div className="flex flex-col p-5  items-center justify-center">
                    <FaHotdog className="h-14 fill-[#d2ac7e] w-14" /> <h3 className="p-4">Stocna hrana</h3>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row text-center ">
                <div className="p-10 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold font-sans p-4 text-center">Misija</h2>
                    <p className="font-sans text-base max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla consectetur cum saepe repellendus quam nisi ducimus obcaecati reiciendis? Dolor modi, accusamus distinctio impedit totam saepe officiis beatae recusandae vitae. Iusto debitis, quaerat quos labore recusandae corporis expedita unde. Exercitationem mollitia voluptatum illum itaque, placeat asperiores debitis veritatis laboriosam voluptas!                </p>
                </div>
                <div className="p-10 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold font-sans p-4 text-center">Vizija</h2>
                    <p className="font-sans text-base max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla consectetur cum saepe repellendus quam nisi ducimus obcaecati reiciendis? Dolor modi, accusamus distinctio impedit totam saepe officiis beatae recusandae vitae. Iusto debitis, quaerat quos labore recusandae corporis expedita unde. Exercitationem mollitia voluptatum illum itaque, placeat asperiores debitis veritatis laboriosam voluptas!                </p>
                </div>
                <div className="p-10 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold font-sans p-4 text-center">Buducnost</h2>
                    <p className="font-sans text-base max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla consectetur cum saepe repellendus quam nisi ducimus obcaecati reiciendis? Dolor modi, accusamus distinctio impedit totam saepe officiis beatae recusandae vitae. Iusto debitis, quaerat quos labore recusandae corporis expedita unde. Exercitationem mollitia voluptatum illum itaque, placeat asperiores debitis veritatis laboriosam voluptas!                </p>
                </div>
            </div>
        </div>
    )
}