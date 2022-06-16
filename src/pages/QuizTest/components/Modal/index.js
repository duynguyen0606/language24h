import { useDispatch, useSelector } from 'react-redux'

function Modal() {
    return <div className={cx('wrapper')}>
        <header>Your result</header>
        <div className={cx('number-correct-answer')}></div>
        <div className={cx('percent')}></div>
        <div className={cx('time')}>Your time: </div>
    </div>
}

export default Modal
