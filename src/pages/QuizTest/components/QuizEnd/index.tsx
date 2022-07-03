import classNames from 'classnames/bind'
import styles from './QuizEnd.module.scss'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { quizShowAnswer } from '../../quizTestSlice'
import { RootState } from '../../../../redux/store'

const cx = classNames.bind(styles)

function QuizEnd() {
    const dispatch = useDispatch()
    const { answers, time, questions } = useSelector((state: RootState) => state.quizReducers)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    useEffect(() => {
        let correct = 0
        answers.forEach((answer, index) => {
            if (answer.a === questions[index].answer) {
                correct++
            }
        })

        setCorrectAnswers(correct)
    }, [answers, questions])

    const handleSeeResult = () => {
        dispatch(quizShowAnswer())
    }

    return (
        <div className={cx('wrapper')}>
            {questions && (
                <>
                    <header>
                        <h2>Your result</h2>
                    </header>
                    <div className={cx('result-item')}>{correctAnswers} of 5</div>
                    <div className={cx('result-item')}>
                        {`${Math.round((correctAnswers / questions.length) * 100)}%`}{' '}
                    </div>
                    <div className={cx('result-item')}>Your time: {time} seconds</div>
                    <div className={cx('result-item')}>
                        <Button onClick={handleSeeResult} primary>
                            See your test
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}

export default QuizEnd
