import classNames from 'classnames/bind'
import styles from './spinner.module.scss'

const cx = classNames.bind(styles)

function Spinner() {
    return (
        <div className={cx('spinner')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner
