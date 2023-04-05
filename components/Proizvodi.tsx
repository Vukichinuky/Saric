import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
interface Slide {
    image: string;
    alt: string;
}
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Proizvodi: React.FC = () => {
    const slides: Slide[] = [

        { image: '/IMG_2991.JPG', alt: 'Slide 1' },
        { image: '/PHOTO-2023-03-30-11-24-07.png', alt: 'Slide 2' },
        { image: '/PHOTO-2023-03-30-11-29-38.png', alt: 'Slide 3' },
        { image: '/PHOTO-2023-03-30-11-29-41 2.png', alt: 'Slide 4' },
        { image: '/PHOTO-2023-03-30-11-29-41 3.png', alt: 'Slide 5' },
        { image: '/PHOTO-2023-03-30-11-29-41.png', alt: 'Slide 6' },
    ];

    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        slidesPerView: 4,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    };

    return (
        <div className=''>
            <h2 className="text-center text-xl italic font-semibold sm:text-2xl p-4">
                Pogledajte primere nekih ambalaza koje pravimo
            </h2>
            <div className="swiper-container sm:px-64 py-20">
                <Swiper {...params}>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <img src={slide.image} width={300} height={400} alt={slide.alt} />

                        </SwiperSlide>
                    ))}<div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>

            </div>
        </div>
    );
};

export default Proizvodi;
