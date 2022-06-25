import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import axios from 'axios'
import classNames from 'classnames/bind'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ConvertToVND from '../../../../ultils/ConvertToVND'
import { Link } from 'react-router-dom'
import { Button, Spinner } from '../../../../components'
import { getCoursesByCategoryId } from '../../categorySlice'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

function Section({ title, description, backgroundColor, urlCourses, ultils, footer, sectionId }) {
    const state = useSelector((state) => state.category[sectionId])
    const listIds = state ? state.listIds : []
    const coursesOfCategoryId = state ? state.coursesList : []

    const dispatch = useDispatch()
    const [tabActive, setTabActive] = useState(0)
    const [categoryList, setCategoryList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleClick = (id) => {
        setTabActive(id)
    }

    useEffect(() => {
        const url = urlCourses
        const getCategory = async () => {
            const categoryItem = (await axios.get(url)).data

            setCategoryList(categoryItem)
        }

        getCategory()
    }, [urlCourses])

    useEffect(() => {
        const url = `${urlCourses}/?id=${tabActive}`
        setIsLoading(true)

        const getCourses = async () => {
            const courses = (await axios.get(url)).data

            dispatch(
                getCoursesByCategoryId({
                    sectionId: sectionId,
                    id: tabActive,
                    coursesList: courses
                })
            )
        }

        setTimeout(() => {
            if (listIds.includes(tabActive)) {
                setIsLoading(false)
            } else {
                getCourses()
                setIsLoading(false)
            }
        }, 1000)
    }, [tabActive])

    const Item = styled(Paper)(({ theme }) => ({
        textAlign: 'left',
        boxShadow: 'unset',
        backgroundColor: 'transparent'
    }))

    return (
        <div className={cx('section')} style={{ backgroundColor: backgroundColor }}>
            <div className='container'>
                <header>
                    <h1 className={cx('title')}>{title}</h1>
                    <p className={cx('description')}>{description}</p>
                </header>
                <div className={cx('body')}>
                    {ultils ? (
                        <Grid container spacing={2}>
                            {ultils.map((ultil) => (
                                <Grid key={ultil.id} item xs={12} sm={6} md={4} lg={4} paddingBottom={2}>
                                    <Item>
                                        <div className={cx('ultil-wrapper')}>
                                            <img alt='img' src={ultil.img} />
                                            <p>{ultil.description}</p>
                                        </div>
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <div>
                            <div className={cx('category')}>
                                {categoryList &&
                                    categoryList.map((item, index) => (
                                        <Button
                                            key={index}
                                            actived={tabActive === index}
                                            upperCase
                                            outline
                                            fontWeight={600}
                                            onClick={() => handleClick(index)}
                                        >
                                            {item.name}
                                        </Button>
                                    ))}
                            </div>

                            {isLoading ? (
                                <Spinner />
                            ) : (
                                <div className={cx('content-category')}>
                                    <Grid container spacing={2}>
                                        {coursesOfCategoryId[tabActive] &&
                                            coursesOfCategoryId[tabActive][0].coursesList.map((course, index) => (
                                                <Grid key={index} item xs={6} sm={6} md={4} lg={3} paddingBottom={2}>
                                                    <Item>
                                                        <div
                                                            style={{
                                                                border: '1px solid #e2e2e2',
                                                                borderRadius: '4px',
                                                                boxShadow:
                                                                    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                                                backgroundColor: 'white'
                                                            }}
                                                        >
                                                            <Link
                                                                to={`/course/${course.pathId}`}
                                                                className={cx('course-item-panel')}
                                                            >
                                                                <div className={cx('header')}>
                                                                    <div className={cx('wrapper-avatar')}>
                                                                        <img
                                                                            className={cx('avatar')}
                                                                            alt='img'
                                                                            src={course.content.avatar}
                                                                        />
                                                                    </div>
                                                                    {course.content.tag && (
                                                                        <div className={cx('tag')}>
                                                                            <div className={cx('tag-text')}>
                                                                                {course.content.tag}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    <div className={cx('hover-item')}>
                                                                        <Button
                                                                            small
                                                                            upperCase
                                                                            outline
                                                                            borderColor='white'
                                                                            backgroundColor='transparent'
                                                                            textColor='white'
                                                                            paddingCustome='10px 12px'
                                                                            fontSize='1.4'
                                                                        >
                                                                            Xem nhanh
                                                                        </Button>
                                                                        <Button
                                                                            small
                                                                            upperCase
                                                                            primary
                                                                            backgroundColor='#ffb039'
                                                                            borderColor='#ffb039'
                                                                            textColor='white'
                                                                            paddingCustome='10px 12px'
                                                                            fontSize='1.4'
                                                                        >
                                                                            Mua ngay
                                                                        </Button>
                                                                    </div>
                                                                    <div className={cx('price')}>
                                                                        {course.content.realCost.toLocaleString(
                                                                            'it-IT',
                                                                            {
                                                                                style: 'currency',
                                                                                currency: 'VND'
                                                                            }
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className={cx('body')}>
                                                                    <div className={cx('course-title')}>
                                                                        {course.content.title}
                                                                    </div>
                                                                    <div className={cx('course-description')}>
                                                                        {course.content.description}
                                                                    </div>
                                                                    <div className={cx('course-item-empty')}></div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </Item>
                                                </Grid>
                                            ))}
                                    </Grid>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {footer ? (
                    <footer>
                        <a className={cx('link')} href='/thanh-toan?combo-khoa-hoc=6652103323811840'>
                            <button className={cx('button-combos')}>
                                <div className={cx('text')}>Mua combo</div>
                                <div className={cx('cost')}>
                                    <div className={cx('sale-off')}>
                                        {coursesOfCategoryId[tabActive] &&
                                            ConvertToVND(coursesOfCategoryId[tabActive][0].totalSaleCost)}
                                    </div>
                                    <del className={cx('delete')}>
                                        {coursesOfCategoryId[tabActive] &&
                                            ConvertToVND(coursesOfCategoryId[tabActive][0].totalRealCost)}
                                    </del>
                                </div>
                            </button>
                        </a>
                    </footer>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Section
