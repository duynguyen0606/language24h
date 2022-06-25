import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './RelatedCourses.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ConvertToVND from '../../../../ultils/ConvertToVND'
import { Spinner } from '../../../../components'

const cx = classNames.bind(styles)

function RelatedCourses() {
    const [page, setPage] = useState(1)
    const [relatedCourses, setRelatedCourses] = useState([])
    const [loading, setLoading] = useState(true)

    const handleLoadMore = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })

    useEffect(() => {
        const url = `http://localhost:5000/related-courses?_page=${page}&_limit=2`

        const getRelatedCourses = async (req, res) => {
            const relatedCourses = (await axios.get(url)).data

            setRelatedCourses((prev) => [...prev, ...relatedCourses])
        }

        getRelatedCourses()
    }, [page])

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className={cx('wrapper')}>
                    <div className='sidebar-title-block'>Khóa học liên quan</div>
                    <div className={cx('show-related')}>
                        <div>
                            {relatedCourses &&
                                relatedCourses.map((course, index) => (
                                    <div key={index}>
                                        <Link className={cx('item')} to='/'>
                                            <img src={course.avatar} alt='img' />
                                            <div>
                                                <div>
                                                    <div className={cx('course-name')}>{course.name}</div>
                                                </div>
                                                <div>
                                                    <div className={cx('course-star')}>4star</div>
                                                </div>
                                                <div>
                                                    <div className={cx('course-price')}>
                                                        {ConvertToVND(course.price)}
                                                    </div>
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
            )}
        </>
    )
}

export default RelatedCourses
