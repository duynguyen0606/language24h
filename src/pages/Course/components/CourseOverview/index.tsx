import classNames from 'classnames/bind'
import { Button, Spinner } from '../../../../components'
import styles from './CourseOverview.module.scss'
import ConvertToVND from '../../../../ultils/ConvertToVND'
import { useState, useEffect } from 'react'
import { CourseInfor } from '../../index'

const cx = classNames.bind(styles)
function CourseOverview({ courseInfor }: { courseInfor: CourseInfor }) {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <div className='sidebar-title-block'>
                        <label>Tổng quan khóa học</label>
                    </div>
                    <div className={cx('item-short-review')}>4star</div>
                    <div className={cx('item-short-review')}>
                        <img src='https://ngoaingu24h.vn/resources/images/new/group.png' alt='users' />
                        <div>
                            <label>Tổng số học viên: </label>
                            <span className={'number-users'}>{courseInfor.numberStudents}</span>
                            <span> Học viên</span>
                        </div>
                    </div>
                    <div className={cx('item-short-review')}>
                        <div>
                            <img src='https://ngoaingu24h.vn/resources/images/new/clipboard.png' alt='users' />
                        </div>
                        <div>
                            <label>Cấu trúc khóa học:</label>
                            <span className={cx('number-lesson')}>
                                <br />
                                {`- Hơn ${courseInfor.structure.chuyenDe} chuyên đề`}
                                <br />
                                {`- Hơn ${courseInfor.structure.baiGiang} bài giảng`}
                                <br />
                                {`- Hơn ${courseInfor.structure.baiThiOnline} bài thi Online`}
                                <br />
                                {`- Thời hạn khóa học: Sau khi kết thúc kì thi THPT ${courseInfor.structure.thoiGian}`}
                            </span>
                        </div>
                    </div>
                    <div className={cx('item-short-review')}>
                        <div>
                            <img
                                src='https://ngoaingu24h.vn/resources/images/new/wallet-filled-money-tool.png'
                                alt='img'
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <label style={{ marginRight: '12px', paddingBottom: '3px' }}>Học phí: </label>
                            <div>
                                <div className={cx('price')}>
                                    <span>{ConvertToVND(courseInfor.cost)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item-short-review')} style={{ justifyContent: 'space-between' }}>
                        <Button primary minWidth='calc(50% - 20px)'>
                            Thêm vào
                        </Button>
                        <Button primary minWidth='calc(50% - 20px)' backgroundColor='#6EC148' borderColor='#6EC148'>
                            Mua ngay
                        </Button>
                    </div>
                    <div className={cx('item-short-review')}>
                        <Button primary extraLarge>
                            Kích hoạt khóa học
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}

export default CourseOverview
