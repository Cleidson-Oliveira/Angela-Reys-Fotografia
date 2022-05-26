import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper"

import { CardSlide } from "./style";

import 'swiper/css';
import 'swiper/css/autoplay';

let backgrounds = [
    "https://angelareysfotografia.s3.sa-east-1.amazonaws.com/carrocel/1.jpg",
    "https://angelareysfotografia.s3.sa-east-1.amazonaws.com/carrocel/2.jpg",
    "https://angelareysfotografia.s3.sa-east-1.amazonaws.com/carrocel/3.jpg",
    "https://angelareysfotografia.s3.sa-east-1.amazonaws.com/carrocel/4.jpg"
]


export default function Carrocel() {
    return (
        <Swiper
            className="carrocel-conteiner"
            modules={[ Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={1000}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {backgrounds.map((bg, i)=>(
                <SwiperSlide className="carouselItem" key={i}>
                    <CardSlide backGroundImg={bg} />
                </SwiperSlide>
            ))}
        </Swiper>
    )  
}