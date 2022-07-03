import React, { ReactNode } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './CustomCarousel.scss'

interface Props {
    slides: {
        id: number
        url: string
        img: string
    }[]
}

const OwlCarousel = ({ slides }: Props) => {
    return (
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={3000} stopOnHover>
            {slides.map((item, index) => (
                <div key={item.id}>
                    <a href={item.url}>
                        <img alt='img' src={item.img} />
                    </a>
                </div>
            ))}
        </Carousel>
    )
}

export default OwlCarousel
