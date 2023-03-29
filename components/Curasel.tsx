
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";


// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css/bundle'
function Curasel() {
    return (
        <div className=' '>
            <div className=''>
                <h2 className='text-center text-slate-300 m-10 text-3xl'>Proizvodi</h2>
            </div>
            <div className=''>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}


                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide className=''> <img src="/vreca1.png" alt="asd" /></SwiperSlide>
                    <SwiperSlide><img src="/saricvreca.png" alt="asd" /></SwiperSlide>
                    <SwiperSlide><img src="/saricvreca1.png" alt="asd" /></SwiperSlide>
                    <SwiperSlide><img src="/saricvreca.png" alt="asd" /></SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default Curasel