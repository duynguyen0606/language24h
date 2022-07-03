import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './NewsOfCourse.module.scss'
import ConvertToTimestamp from '../../../../ultils/ConvertToTimestamp'
import axios from 'axios'
import { useState, useEffect } from 'react'

const cx = classNames.bind(styles)

interface News {
    id: number
    avatar: string
    description: string
    updated: number
}

function News() {
    const [page, setPage] = useState(1)
    const [newsOfCourse, setNewsOfCourse] = useState<[] | News[]>([])

    useEffect(() => {
        const url = `http://localhost:5000/news-of-course?_page=${page}&_limit=2`

        const getNews = async () => {
            const news = (await axios.get(url)).data

            setNewsOfCourse((prev) => [...prev, ...news])
        }

        getNews()
    }, [page])

    const handleLoadMore = () => {
        setPage(page + 1)
    }

    return (
        <div className={cx('wrapper')}>
            <div className='sidebar-title-block'>Tin tức</div>
            <div className={cx('show-list-news')}>
                <div>
                    {newsOfCourse &&
                        newsOfCourse.map((news: News, index) => (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                <Link to='/' className={cx('news-item')}>
                                    <img src={news.avatar} alt='img' />
                                    <div>
                                        <div className={cx('name')}>
                                            <span>{news.description}</span>
                                        </div>
                                        <div className={cx('updated')}>
                                            <span>Cập nhật {ConvertToTimestamp(news.updated)}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
            <div className='load-more' onClick={handleLoadMore}>
                Xem thêm...
            </div>
        </div>
    )
}

export default News
