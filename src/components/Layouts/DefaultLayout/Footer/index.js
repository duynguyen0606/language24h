import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import * as React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import Button from '../../../Button'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} paddingBottom={6}>
                            <div className={cx('contact-panel')} style={{paddingLeft: '12px'}}>
                                <div className={cx('contact-item')}>
                                    <img
                                        alt="img"
                                        className={cx('icon')}
                                        src="https://ngoaingu24h.vn/resources/images/home/placeholder.png"
                                    />
                                    <p className={cx('content')}>Tầng 5, Số 52 Chùa Hà, Quan Hoa, Cầu Giấy, Hà Nội</p>
                                </div>
                                <div className={cx('contact-item')}>
                                    <img
                                        alt="img"
                                        className={cx('icon')}
                                        src="https://ngoaingu24h.vn/resources/images/home/mail.png"
                                    />
                                    <p className={cx('content')}>hotrokythuat.ngoaingu24h@gmail.com</p>
                                </div>
                                <div className={cx('contact-item')}>
                                    <img
                                        alt="img"
                                        className={cx('icon')}
                                        src="https://ngoaingu24h.vn/resources/images/home/phone-call.png"
                                    />
                                    <p className={cx('content')}>0989924488</p>
                                </div>

                                <div className={cx('branch-content')}>
                                    <span>Công ty TNHH Giáo dục Wordington</span>
                                    <br />
                                    <span>MST: 0108433619 do Sở kế hoạch và đầu tư Thành phố Hà Nội cấp lần</span>
                                    <br />
                                    <span>đầu ngày 14/09/2018</span>
                                    <br />
                                    <span>Địa chỉ: Tầng 5, số 52 phố Chùa Hà, Phường Quan Hoa, Quận Cầu Giấy,</span>
                                    <br />
                                    <span>Thành phố Hà Nội</span>
                                </div>

                                <Link to="/" className={cx('connect')}>
                                    <p style={{color: 'var(--white-color)'}}>Kết nối với chúng tôi</p>
                                    <FacebookOutlinedIcon
                                        color="primary"
                                        className={cx('icon')}
                                        style={{ fontSize: 32 }}
                                    />
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/* <Grid xs={12} md={6}>12343222222222</Grid> */}
                            <div className={cx('grid-container-custom')}>
                                <div className={cx('policy')}>
                                    <p style={{paddingLeft: '12px'}}>CÁC CHÍNH SÁCH</p>
                                    <div className={cx('wrapper-item')}>
                                        <Button fontSize={1.4} textAlignLeft text to='/chinh-sach-chung'>
                                            Chính sách chung
                                        </Button>
                                        <Button fontSize={1.4} marginLeft={0} textAlignLeft text to='/chinh-sach-bao-mat-thong-tin'>
                                            Chính sách bảo mật thông tin
                                        </Button>
                                        <Button fontSize={1.4} marginLeft={0} textAlignLeft text to='/tin-tuc/huong-dan-mua-hang'>
                                            Hướng dẫn mua hàng
                                        </Button>
                                        <Button fontSize={1.4} marginLeft={0} textAlignLeft text to='/tin-tuc/huong-dan-kich-hoat-khoa-hoc'>
                                            Hướng dẫn kích hoạt khóa học
                                        </Button>
                                        <Button fontSize={1.4} marginLeft={0} textAlignLeft text to='/tin-tuc/chinh-sach-hoan-tra-hoc-phi'>
                                            Chính sách hoàn trả học phí
                                        </Button>
                                    </div>

                                    <div className={cx('stamp')}>
                                        <Button className={cx('img-link')} to>
                                            <img
                                                className={cx('img')}
                                                alt="img"
                                                src="https://ngoaingu24h.vn/resources/images/dathongbao.png"
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Footer
