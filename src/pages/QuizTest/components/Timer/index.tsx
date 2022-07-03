import classNames from 'classnames/bind'
import ConvertToMinutes from '../../../../ultils/ConvertToMinutes'
import styles from './Timer.module.scss'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { timeOut, quizCountDown } from '../../quizTestSlice'
import { RootState } from '../../../../redux/store'

const cx = classNames.bind(styles)

let timerId: NodeJS.Timeout | undefined

function Timer() {
    const dispatch = useDispatch()
    const { timerCountDown } = useSelector((state: RootState) => state.quizReducers, shallowEqual)

    console.log('timer')

    useEffect(() => {
        if (timerCountDown > 0) {
            timerId = setTimeout(() => dispatch(quizCountDown({ timerCountDown: timerCountDown - 1 })), 1000)
        } else {
            clearTimeout(timerId)
            dispatch(timeOut())
        }
    }, [timerCountDown, dispatch])

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('timer')}>{ConvertToMinutes(timerCountDown)}</h3>
        </div>
    )
}

export default Timer
