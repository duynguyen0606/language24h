import classNames from 'classnames/bind'
import ConvertToMinutes from '../../../../ultils/ConvertToMinutes'
import styles from './Timer.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { timeOut, quizCountDown } from '../../../../redux/actions/quizActions'

const cx = classNames.bind(styles)

let timerId

function Timer() {
    const dispatch = useDispatch()
    const { timerCountDown } = useSelector((state) => state.quizReducers)

    useEffect(() => {
        if (timerCountDown > 0) {
            setTimeout(() => dispatch(quizCountDown(timerCountDown - 1)), 1000)
        } else {
            clearTimeout(timerId)
            dispatch(timeOut())
        }
    }, [timerCountDown])

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('timer')}>{ConvertToMinutes(timerCountDown)}</h3>
        </div>
    )
}

export default Timer
