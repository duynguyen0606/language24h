import { shallowEqual, useDispatch } from 'react-redux'
import { quizNext, quizSubmit } from '../../quizTestSlice'
import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './QuestionBlock.module.scss'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'

const cx = classNames.bind(styles)

function QuestionBlock({ questions }) {
    const { time, activeQuestion, answers, timerCountDown } = useSelector((state) => state.quizReducers, shallowEqual)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState('')

    const handleNextQuiz = () => {
        let ans = [...answers]

        ans[activeQuestion] = {
            q: questions[activeQuestion].question,
            a: selected
        }

        dispatch(
            quizNext({
                answers: ans
            })
        )
        setSelected('')
    }

    const handleSubmit = () => {
        dispatch(
            quizSubmit({
                answers: [
                    ...answers,
                    {
                        q: questions[activeQuestion].question,
                        a: selected
                    }
                ],
                time: time - timerCountDown
            })
        )
    }

    return (
        <div className={cx('wrapper')}>
            {questions && (
                <>
                    <div className={cx('active-quiz')}>
                        <span style={{ fontSize: '2rem', fontStyle: 'italic', fontWeight: 'bold' }}>
                            {activeQuestion + 1}
                        </span>
                        /<span style={{ fontStyle: 'italic' }}>{questions.length}</span>
                    </div>
                    <div className={cx('content')}>
                        <div>{questions[activeQuestion].question}</div>
                        <div className={cx('wrapper-answer')}>
                            {questions[activeQuestion].choices.map((choice, i) => (
                                <div key={i} className={cx('answer-item')}>
                                    <label className={choice === selected ? cx('selected') : cx('text')}>
                                        <input
                                            type='radio'
                                            name='answer'
                                            value={choice}
                                            onChange={(e) => setSelected(e.target.value)}
                                            checked={choice === selected}
                                        />
                                        <span style={{ marginLeft: '4px' }}>{choice}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cx('footer')}>
                        {activeQuestion + 1 < questions.length ? (
                            <Button
                                primary
                                backgroundColor='rgb(103, 103, 208)'
                                borderColor='rgb(103, 103, 208)'
                                onClick={handleNextQuiz}
                            >
                                NEXT
                            </Button>
                        ) : (
                            <Button
                                primary
                                backgroundColor='rgb(34 124 52)'
                                borderColor='rgb(34 124 52)'
                                onClick={handleSubmit}
                            >
                                SUBMIT
                            </Button>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default QuestionBlock
