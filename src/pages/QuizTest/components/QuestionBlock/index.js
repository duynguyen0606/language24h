import { useDispatch, useSelector } from 'react-redux'
import { quizNext, quizSubmit } from '../../../../redux/actions/quizActions'
import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './QuestionBlock.module.scss'
import { useRef } from 'react'

const cx = classNames.bind(styles)

const data = [
    {
        question: 'Which of the following is the major element in earth crust?',
        choices: ['Silicon', 'Oxygen', 'Iron', 'Aluminium'],
        answer: 'Oxygen',
    },
    {
        question: 'Which among the following country is known as “Land of White Elephant”?',
        choices: ['India', 'Sri Lanka', 'UAE', 'Thailand'],
        answer: 'Thailand',
    },
    {
        question: 'What is the capital of Austria ?',
        choices: ['Graz', 'Salzburg', 'Innsbruck', 'Vienna'],
        answer: 'Vienna',
    },
    {
        question: 'The term Ground Stroke is associated with which of the following games?',
        choices: ['Cricket', 'Badminton', 'Tennis', 'Draughts'],
        answer: 'Tennis',
    },
    {
        question: 'What is the name of the biggest planet in our solar system ?',
        choices: ['Mars', 'Jupiter', 'Earth', 'Mercury'],
        answer: 'Jupiter',
    },
]

function QuestionBlock({ time, activeQuestion, answers, showAnswer, timer}) {
    const radiosWrapper = useRef()
    const dispatch = useDispatch()
    const [selected, setSelected] = useState('')

    const handleNextQuiz = () => {
        let ans = [...answers]

        ans[activeQuestion] = {
            q: data[activeQuestion].question,
            a: selected,
        }

        dispatch(quizNext(ans))
        setSelected('')
    }

    const handleSubmit = () => {
        dispatch(
            quizSubmit(
                [
                    ...answers,
                    {
                        q: data[activeQuestion].question,
                        a: selected,
                    },
                ],
                time - timer,
                true,
            ),
        )
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('active-quiz')}>
                <span style={{ fontSize: '2rem', fontStyle: 'italic', fontWeight: 'bold' }}>{activeQuestion + 1}</span>/
                <span style={{ fontStyle: 'italic' }}>{data.length}</span>
            </div>
            <div className={cx('content')}>
                <div>{data[activeQuestion].question}</div>
                <div className={cx('wrapper-answer')}>
                    {data[activeQuestion].choices.map((choice, i) => (
                        <div key={i} className={cx('answer-item')} ref={radiosWrapper}>
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

                    {showAnswer ? (
                        <div className={cx('result')}>
                            <div>{data[activeQuestion].answer}</div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            {showAnswer ? (
                <></>
            ) : (
                <div className={cx('footer')}>
                    {activeQuestion + 1 < data.length ? (
                        <>
                            <button className={cx('button')} onClick={handleNextQuiz}>
                                NEXT
                            </button>
                        </>
                    ) : (
                        <button className={cx('button', 'submit')} onClick={handleSubmit}>
                            SUBMIT
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default QuestionBlock
