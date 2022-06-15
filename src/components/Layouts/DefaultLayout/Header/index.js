import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import HeaderFirst from './HeaderFirst'
import HeaderSecond from './HeaderSecond'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'

const cx = classNames.bind(styles)

function Header() {
    const [fixed, setFixed] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleShowMenu = () => {
        setShow((prev) => !prev)
    }

    return (
        <header
            className={cx('wrapper', {
                fixed,
            })}
        >
            <div className={cx('show-on-mobile')}>
                <div className={cx('menu-icon', 'item')} onClick={handleShowMenu}>
                    <MenuIcon style={{ fontSize: '2.3rem' }} />
                </div>
                <div className={cx('item')}>
                    <div className={cx('cart-icon')}>
                        <ShoppingCartIcon style={{ fontSize: '2rem' }} />
                    </div>
                    <div className={cx('avatar')}>
                        <img src='https://storage.googleapis.com/kslearning/avatar.png' alt='avatar' />
                    </div>
                </div>

                <div className={cx('sidebar-on-mobile')} style={show ? { width: '270px' } : { width: 0 }}>
                    <header>
                        <div className={cx('close-btn', 'item')} onClick={handleShowMenu}>
                            <CloseIcon style={{ fontSize: '27px' }} />
                        </div>
                        <div className={cx('logo', 'item')}>
                            <Link to='/'>
                                <img
                                    src='https://storage.googleapis.com/comaiphuong-edu-media/images/28643639-1582340275030-logongoaingu24h.jpg'
                                    alt='img'
                                />
                            </Link>
                        </div>
                    </header>
                    <div className={cx('search')}>
                        <input className={cx('input')} type='search' placeholder='Tìm kiếm...' />
                        <div className={cx('btn')}>
                            <SearchIcon />
                        </div>
                    </div>
                    <Link className={cx('sidebar-item')} to='/'>
                        Trang chủ
                    </Link>
                    <div className={cx('sidebar-item')}>Các khóa học</div>
                    <Link className={cx('sidebar-item', 'fire')} to='/'>
                        Hot combo
                        <img
                            className={cx('img')}
                            src='https://ngoaingu24h.vn/resources/images/Icon-NN24H/fire_gif.gif'
                            alt='fire'
                        />
                    </Link>
                    <Link className={cx('sidebar-item')} to='/'>
                        Sách
                    </Link>
                    <Link className={cx('sidebar-item')} to='/'>
                        Sự kiện
                    </Link>
                    <Link className={cx('sidebar-item')} to='/'>
                        Liên hệ
                    </Link>
                </div>
            </div>

            <div className={cx('hide-on-mobile')}>
                <HeaderFirst />
                <HeaderSecond />
            </div>
        </header>
    )
}

export default Header
