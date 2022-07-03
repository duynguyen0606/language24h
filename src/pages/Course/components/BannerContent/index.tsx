import classNames from 'classnames/bind'
import styles from './BannerContent.module.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Button } from '../../../../components'

const cx = classNames.bind(styles)

function BannerContent({ avatar, name }: { avatar: string; name: string }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div
                    style={{
                        content: '',
                        position: 'absolute',
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        background: `url("${avatar}") center center / 100% no-repeat`,
                        filter: 'brightness(0.6)',
                        opacity: '0.8'
                    }}
                ></div>
                <div className={cx('name')}>{name}</div>
            </div>
            <div className='container'>
                <div className={cx('path-link')}>
                    <Button small fontSize={1.4} link textColor='var(--text-color)' href='/'>
                        Trang chủ
                    </Button>
                    <ArrowRightIcon style={{ fontSize: '20px' }} />
                    <Button small fontSize={1.4} link textColor='var(--text-color)' href='/'>
                        Danh mục khóa học
                    </Button>
                    <ArrowRightIcon style={{ fontSize: '20px' }} />
                    <Button small fontSize={1.4} link textColor='var(--root-color)' href='/'>
                        {name}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default BannerContent
