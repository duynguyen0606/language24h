import { useParams } from 'react-router-dom'
import { BannerContent, CourseDetails, CourseOverview, RelatedCourses, News, ActiveRecently } from './components'
import classNames from 'classnames/bind'
import styles from './Course.module.scss'
import './commonStyles.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Button } from '../../components'

const cx = classNames.bind(styles)

function Course() {
    const { courseId } = useParams()
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [courseDetails, setCourseDetails] = useState([])
    const [courseInfor, setCourseInfor] = useState({})
    const [activitiesRecently, setActivitiesRecently] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        const url = `http://localhost:5000/course-child-topics?id=${courseId}`

        const getCourse = async (req, res) => {
            const course = (await axios.get(url)).data[0]

            setCourseDetails(course.coursesChildren)
            setAvatar(course.avatar)
            setName(course.name)
        }
        getCourse()
    }, [courseId])

    useEffect(() => {
        const url = `http://localhost:5000/overview-courses?id=${courseId}`

        const getCourseInfor = async (req, res) => {
            const infor = (await axios.get(url)).data[0]

            setCourseInfor(infor)
        }

        getCourseInfor()
    }, [courseId])

    useEffect(() => {
        const url = `http://localhost:5000/activities-recently`

        const getActivities = async (req, res) => {
            const activities = (await axios.get(url)).data

            setActivitiesRecently(activities)
        }

        getActivities()
    }, [courseId])

    const Item = styled(Paper)(({ theme }) => ({
        borderRadius: 'unset',
        padding: '15px',
        border: '1px solid #ddd',
        boxShadow: 'unset',
        backgroundColor: 'white'
    }))

    return (
        <div className={cx('wrapper')}>
            <BannerContent avatar={avatar} name={name} />
            <div style={{ backgroundColor: '#f7f7f3', paddingBottom: '16px' }}>
                <div className='container' style={{ paddingTop: '10px' }}>
                    <div className={cx('nav-tabs')}>
                        <Button
                            fontSize={1.4}
                            textColor='var(--text-color)'
                            fontWeight='bold'
                            backgroundColor='var(--white-color)'
                            minWidth='120px'
                            paddingCustome='10px 12px'
                        >
                            Nội dung
                        </Button>
                        <Button
                            fontSize={1.4}
                            textColor='var(--text-color)'
                            fontWeight='bold'
                            backgroundColor='transparent'
                            minWidth='120px'
                            paddingCustome='10px 12px'
                        >
                            Đánh giá
                        </Button>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                            <Item>
                                <CourseDetails courseDetails={courseDetails} />
                            </Item>
                            <div style={{ marginTop: '16px' }}>
                                <Item>
                                    <ActiveRecently activities={activitiesRecently} />
                                </Item>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                            <Item>
                                <CourseOverview courseInfor={courseInfor} />
                            </Item>
                            <div style={{ marginTop: '16px' }}>
                                <Item>
                                    <RelatedCourses />
                                </Item>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Item>
                                    <News />
                                </Item>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Course
