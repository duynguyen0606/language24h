import classNames from 'classnames/bind'
import styles from './CourseDetails.module.scss'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import LockIcon from '@mui/icons-material/Lock'
import { Spinner } from '../../../../components'
import { useState, useEffect } from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { useDispatch } from 'react-redux'
import { showChildCoursesById } from '../../../../redux/actions'

const cx = classNames.bind(styles)

function CourseDetails({ courseDetails }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(true)
    const [id, setId] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const handleShowTopic = (e, id) => {
        setId(id)
        if (parseInt(e.currentTarget.id) === id) {
            setShow((prev) => !prev)
        }

        dispatch(showChildCoursesById(id, show))
    }

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('line')}></div>
                    <div className={cx('topic-tree')}>
                        <div className={cx('item-panel')}>
                            <div style={{ width: '25px' }}></div>
                            <div className={cx('box-content')} style={{ boxShadow: 'unset' }}>
                                <div className={cx('topic-content')}>
                                    <div className={cx('item-name')} style={{ marginRight: 'auto' }}>
                                        Tên bài học
                                    </div>
                                    <div className={cx('item-name')}>Tiến độ học</div>
                                </div>
                            </div>
                        </div>
                        {courseDetails.map((course, index) => (
                            <div key={index} className={cx('item-panel')}>
                                <div style={{ width: '25px' }}></div>
                                <div className={cx('topic-item')}>
                                    <div className={cx('box-content')}>
                                        <div
                                            className={cx('topic-content')}
                                            style={
                                                course.childrenTopics
                                                    ? { backgroundColor: '#eee', borderRadius: '10px 10px 0 0' }
                                                    : {}
                                            }
                                        >
                                            {course.childrenTopics && (
                                                <div
                                                    className={cx('topic-show-btn')}
                                                    id={course.id}
                                                    onClick={(e) => handleShowTopic(e, course.id)}
                                                >
                                                    {show ? (
                                                        <KeyboardDoubleArrowDownIcon />
                                                    ) : (
                                                        <KeyboardDoubleArrowRightIcon />
                                                    )}
                                                </div>
                                            )}

                                            <div style={{ padding: '14px' }}>
                                                <WatchLaterIcon />
                                            </div>
                                            <div className={cx('body')}>
                                                <div className={cx('name')}>{course.name}</div>
                                                <div className={cx('description')}>{course.description}</div>
                                            </div>
                                            <div className={cx('progress')}>-</div>
                                            <div className={cx('lock-icon')}>
                                                <LockIcon />
                                            </div>
                                        </div>

                                        {id === course.id ? (
                                            <div className={cx('children')}>
                                                {course.childrenTopics &&
                                                    course.childrenTopics.map((childCourse, index) => (
                                                        <div
                                                            key={index}
                                                            style={{ paddingLeft: '25px', backgroundColor: '#fafafa' }}
                                                        >
                                                            <div
                                                                className={cx('topic-item')}
                                                                style={{ padding: 'unset' }}
                                                            >
                                                                <div className={cx('item-panel')}>
                                                                    <div className={cx('left')}>
                                                                        <div className={cx('number')}>
                                                                            {(childCourse.id + 1)
                                                                                .toString()
                                                                                .padStart(2, '0')}
                                                                        </div>
                                                                    </div>
                                                                    <div className={cx('right')}>
                                                                        <div
                                                                            className={cx('box-content')}
                                                                            style={{
                                                                                boxShadow: 'unset',
                                                                                border: 'none',
                                                                            }}
                                                                        >
                                                                            <div
                                                                                className={cx('topic-content')}
                                                                                style={{ borderTop: '1px solid #ddd' }}
                                                                            >
                                                                                <div style={{ padding: '14px' }}>
                                                                                    <WatchLaterIcon />
                                                                                </div>
                                                                                <div className={cx('body')}>
                                                                                    <div className={cx('name')}>
                                                                                        {childCourse.name}
                                                                                    </div>
                                                                                    <div className={cx('description')}>
                                                                                        {childCourse.questionsNumber}{' '}
                                                                                        Câu hỏi
                                                                                    </div>
                                                                                </div>
                                                                                <div className={cx('progress')}>-</div>
                                                                                <div className={cx('lock-icon')}>
                                                                                    <LockIcon />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default CourseDetails
