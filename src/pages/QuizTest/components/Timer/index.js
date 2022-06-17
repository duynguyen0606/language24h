import classNames from 'classnames/bind'
import ConvertToMinutes from '../../../../ultils/ConvertToMinutes'
import styles from './Timer.module.scss'

const cx = classNames.bind(styles)

function Timer({ timer }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('timer')}>{ConvertToMinutes(timer)}</h3>
        </div>
    )
}

export default Timer
