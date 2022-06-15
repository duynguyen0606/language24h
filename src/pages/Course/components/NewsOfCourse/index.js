import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './NewsOfCourse.module.scss'
import ConvertToTimestamp from '../../../../ultils/ConvertToTimestamp'
import axios from 'axios'
import { useState, useEffect } from 'react'

const cx = classNames.bind(styles)

function News() {
    const [page, setPage] = useState(0)
    const [newsOfCourse, setNewsOfCourse] = useState([])

    const handleLoadMore = () => {
        setPage((prev) => prev + 1)
    }
    useEffect(() => {
        const url = `http://localhost:5000/news-of-course?_page=${page}&_limit=2`

        const getNews = async (req, res) => {
            const news = (await axios.get(url)).data

            setNewsOfCourse((prev) => [...prev, ...news])
        }

        getNews()
    }, [page])

    return (
        <div className={cx('wrapper')}>
            <div className='sidebar-title-block'>Tin tức</div>
            <div className={cx('show-list-news')}>
                <div>
                    {newsOfCourse &&
                        newsOfCourse.map((course, index) => (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                <Link to='/' className={cx('news-item')}>
                                    <img src={course.avatar} alt='img' />
                                    <div>
                                        <div className={cx('name')}>
                                            <span>{course.description}</span>
                                        </div>
                                        <div className={cx('updated')}>
                                            <span>Cập nhật {ConvertToTimestamp(course.updated)}</span>
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
