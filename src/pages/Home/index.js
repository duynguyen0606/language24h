import axios from 'axios'
import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'

import OwlCarousel from '../../components/Layouts/components/Carousel'
import Section from './components/Section'

const cx = classNames.bind(styles)

function Home() {
    const [slides, setSlides] = useState([])
    const [scoreSlides, setScoreSlides] = useState([])
    const [ultils, setUltils] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        const url = 'http://localhost:5000/slides'
        const getSlides = async () => {
            const slidesArr = (await axios.get(url)).data

            setSlides(slidesArr)
        }

        getSlides()
            .then(console.log('Get slides success!'))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        const url = 'http://localhost:5000/score-slides'
        const getScoreSlides = async () => {
            const slides = (await axios.get(url)).data

            setScoreSlides(slides)
        }

        getScoreSlides()
            .then(console.log('get score slides success!'))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        const url = 'http://localhost:5000/online-utilties'
        const getUltils = async () => {
            const ultils = (await axios.get(url)).data

            setUltils(ultils)
        }

        getUltils()
            .then(console.log('get ultils slides success!'))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className={cx('carousel-wrapper')}>
                <OwlCarousel slides={slides} />
            </div>
            <Section
                sectionId='courses-2022'
                title='Các khóa luyện thi 2022'
                description='Đa dạng các khoá học cho bạn lựa chọn. Giúp việc học trở nên dễ dàng hơn'
                urlCourses='http://localhost:5000/courses-practice-2022'
                footer
            />
            <Section
                sectionId='courses-2023'
                title='CÁC KHOÁ LUYỆN THI 2023'
                description='COMBO luyện thi (THPT, ĐG năng lực, ĐG tư duy) năm 2023'
                urlCourses='http://localhost:5000/courses-practice-2023'
                backgroundColor='#e0e0eb'
                footer
            />
            <div className='container'>
                <div style={{ padding: '50px 0' }}>
                    <div className={cx('carousel-wrapper')}>
                        <OwlCarousel slides={scoreSlides} />
                    </div>
                </div>
            </div>
            {/* <Section
                sectionId='ultilties-online'
                title='CÁC TIỆN ÍCH HỌC ONLINE'
                description='Chỉ là cách học đơn giản và vui vẻ nhất mà bạn từng biết đến thôi mà, cùng điểm qua có gì hot nhé!'
                ultils={ultils}
                footer={false}
                backgroundColor='#f8f9fe'
            /> */}
        </>
    )
}

export default Home
