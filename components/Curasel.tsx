import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

const carousel: KeenSliderPlugin = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}
function Curasel() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )
    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell  number-slide1">
                        <Image width={300} height={400} src={"/slikavrece1.PNG"} alt={""} />
                    </div>
                    <div className="carousel__cell  number-slide2">
                        <Image width={300} height={400} src={"/slikavrece2.PNG"} alt={""} />

                    </div>
                    <div className="carousel__cell   number-slide3">
                        <Image width={300} height={400} src={"/slikavrece3.PNG"} alt={""} />
                    </div>
                    <div className="carousel__cell  number-slide4">
                        <Image width={300} height={400} src={"/slikavrece4.PNG"} alt={""} />
                    </div>
                    <div className="carousel__cell  number-slide5">
                        <Image width={100} height={400} src={"/slikavrece5.PNG"} alt={""} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curasel