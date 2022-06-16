import classNames from 'classnames/bind'
import styles from './QuizTest.module.scss'
import { Timer, QuestionBlock, QuizEnd } from './components'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { timeOut } from '../../redux/actions/quizActions'

const cx = classNames.bind(styles)

function QuizTest() {
    const dispatch = useDispatch()
    const { activeQuestion, time, answers, showModal, isFinished } = useSelector((state) => state.quizReducers)
    const [timer, setTimer] = useState(time)

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000)
        } else {
            dispatch(timeOut())
        }
    }, [timer])

    return (
        <div className={cx('wrapper')}>
            <div className='container'>
                <div className={cx('title')}>
                    <h2>Quiz test</h2>
                </div>
                <div
                    style={{
                        backgroundColor: 'var(--white-color)',
                        padding: '16px',
                        minHeight: '320px',
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                    }}
                >
                    <Timer timer={timer} />
                    <QuestionBlock
                        activeQuestion={activeQuestion}
                        time={time}
                        answers={answers}
                        showModal={showModal}
                        timer={timer}
                    />
                </div>
            </div>
        </div>
    )
}

export default QuizTest
