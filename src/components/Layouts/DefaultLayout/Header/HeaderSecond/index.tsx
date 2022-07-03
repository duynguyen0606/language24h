import classNames from 'classnames/bind'
import styles from './HeaderSecond.module.scss'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const cx = classNames.bind(styles)

function HeaderSecond() {
    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(prev => !prev)
    }
    
    return (
        <div className={cx('second')}>
            <div className={cx('container')}>
                <div className="header-content-panel">
                    <div className="header-logo-panel">
                        <Link to="/">
                            <img
                                className={cx('img-logo')}
                                src="https://storage.googleapis.com/comaiphuong-edu-media/images/28643639-1582340275030-logongoaingu24h.jpg"
                                alt="Ngoaingu24h"
                            />
                        </Link>
                    </div>
                    <div className={cx('search-panel')}>
                        <input className={cx('search-box')} type="text" placeholder="Tìm kiếm" />
                        <button className={cx('search-btn')}>
                            <SearchIcon className={cx('search-icon')} style={{ fontSize: 18 }} />
                        </button>
                    </div>
                    <div className={show ? cx('menu-panel') : cx('show-panel-on-mobile')}>
                        <div className={cx('menu-item')}>
                            <Link to="">Khóa Học</Link>
                        </div>
                        <div className={cx('menu-item')}>
                            <Link className={cx('menu-item-animation')} to="">
                                Hot combo
                            </Link>
                            <img
                                className={cx('icon-fire')}
                                src="https://ngoaingu24h.vn/resources/images/Icon-NN24H/fire_gif.gif"
                                alt=""
                            />
                        </div>
                        <div className={cx('menu-item')}>
                            <Link to="">Sách</Link>
                        </div>
                        <div className={cx('menu-item')}>
                            <Link to="">Sự kiện</Link>
                        </div>
                    </div>
                    <button onClick={handleClick} className={cx('menu-button')}>
                        <MenuIcon style={{ fontSize: 30, color: '#555' }} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderSecond
