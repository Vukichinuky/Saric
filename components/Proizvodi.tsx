import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
interface Slide {
    image: string;
    alt: string;
}

const Proizvodi: React.FC = () => {
    const slides: Slide[] = [
        { image: '/IMG_2991.JPG', alt: 'Slide 1' },
        { image: '/IMG_2991.JPG', alt: 'Slide 2' },
        { image: '/IMG_2991.JPG', alt: 'Slide 3' },
        { image: '/IMG_2991.JPG', alt: 'Slide 4' },
        { image: '/IMG_2991.JPG', alt: 'Slide 5' },
        { image: '/IMG_2991.JPG', alt: 'Slide 6' },
        { image: '/IMG_2991.JPG', alt: 'Slide 7' },
        { image: '/IMG_2991.JPG', alt: 'Slide 8' },
        { image: '/IMG_2991.JPG', alt: 'Slide 9' },
        { image: '/IMG_2991.JPG', alt: 'Slide 10' },
    ];

    const params = {

        loop: true,
        slidesPerView: 3,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    };

    return (
        <div>
            <h2 className="text-center text-xl italic font-semibold sm:text-2xl p-4">
                Pogledajte primere nekih ambalaza koje pravimo
            </h2>
            <div className="swiper-container p-20">
                <Swiper {...params}>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className='swiper-slide'>
                            <img src={slide.image} width={200} height={200} alt={slide.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Proizvodi;
