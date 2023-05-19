import React from "react";
import Image from "next/image";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const carousel: KeenSliderPlugin = (slider) => {
    const z = 300;
    function rotate() {
        const deg = 360 * slider.track.details.progress;
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length;
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
        });
        rotate();
    });
    slider.on("detailsChanged", rotate);
};

export default function App() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    );

    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell number-slide1"><Image width={400} height={400} src={"/slikavrece11.png"} alt={""} /></div>
                    <div className="carousel__cell number-slide2"><Image width={400} height={400} src={"/slikavrece21.png"} alt={""} /></div>
                    <div className="carousel__cell number-slide3"><Image width={400} height={400} src={"/slikavrece31.png"} alt={""} /></div>
                    <div className="carousel__cell number-slide4"><Image width={600} height={600} src={"/slikavrece41.png"} alt={""} /></div>
                    <div className="carousel__cell number-slide5"><Image width={400} height={400} src={"/slikavrece5.png"} alt={""} /></div>
                </div>
            </div>
        </div>
    );
}
