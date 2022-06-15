import classNames from 'classnames/bind'
import styles from './HeaderFirst.module.scss'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const cx = classNames.bind(styles)

function HeaderFirst() {
    return (
        <div className={cx('first')}>
            <div className='container'>
                <div className='header-content-panel'>
                    <div style={{ display: 'flex' }}>
                        <Link className={cx('hotline')} to='tel:0989924488'>
                            <PhoneIcon sx={{ fontSize: 18 }} style={{ paddingRight: '2px' }} />
                            <span className='text-opacity'>Hotline: </span>
                            <span className='text-opacity'>0989924488</span>
                        </Link>
                        <Link className={cx('hotline', 'email')} to='mailto:hotrokythuat.ngoaingu24h@gmail.com'>
                            <EmailIcon sx={{ fontSize: 18 }} style={{ paddingRight: '2px' }} />
                            <span className='text-opacity'>Email: </span>
                            <span className='text-opacity'>hotrokythuat.ngoaingu24h@gmail.com</span>
                        </Link>
                        <div className={cx('language-selection')}>
                            <LanguageIcon sx={{ fontSize: 18 }} style={{ paddingRight: '2px' }} />
                            <span className='text-opacity'>Ngôn ngữ:</span>
                        </div>
                    </div>

                    <div className={cx('user-action')}>
                        <ShoppingCartIcon fontSize='large' />
                        <button className={cx('login')}>
                            <AccountCircleIcon fontSize='large' style={{ paddingRight: '2px' }} />
                            Đăng nhập
                        </button>
                        <button className={cx('register')}>Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderFirst
