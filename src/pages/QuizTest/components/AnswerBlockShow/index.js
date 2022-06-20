import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './AnswerBlockShow.module.scss'
import Button from '../../../../components/Button'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const cx = classNames.bind(styles)

function AnswerBlock({ questions }) {
    const answers = useSelector((state) => state.quizReducers.answers)
    const [currentAnswer, setCurrentAnswer] = useState(0)
    const [selected, setSelected] = useState('')

    console.log(answers)

    useEffect(() => {
        setSelected(answers[currentAnswer] ? answers[currentAnswer].a : '')
    }, [answers, currentAnswer])

    const handlePrevQuiz = () => {
        if (currentAnswer === 0) {
            setCurrentAnswer(0)
        } else {
            setCurrentAnswer(currentAnswer - 1)
        }
    }

    const handleNextQuiz = () => {
        if (currentAnswer === questions.length - 1) {
            setCurrentAnswer(questions.length - 1)
        } else {
            setCurrentAnswer(currentAnswer + 1)
        }
    }

    return (
        <div className={cx('wrapper')}>
            {questions && (
                <>
                    <div className={cx('active-quiz')}>
                        <span style={{ fontSize: '2rem', fontStyle: 'italic', fontWeight: 'bold' }}>
                            {currentAnswer + 1}
                        </span>
                        /<span style={{ fontStyle: 'italic' }}>{questions.length}</span>
                    </div>
                    <div className={cx('content')}>
                        <div>{questions[currentAnswer].question}</div>
                        <div className={cx('wrapper-answer')}>
                            {questions[currentAnswer].choices.map((choice, i) => (
                                <div key={i} className={cx('answer-item')}>
                                    <label className={choice === selected ? cx('selected') : cx('text')}>
                                        <input
                                            type='radio'
                                            name='answer'
                                            value={choice}
                                            checked={choice === selected}
                                            readOnly={true}
                                        />
                                        <span style={{ marginLeft: '4px' }}>{choice}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className={cx('answer-result')}>
                            <span
                                className={questions[currentAnswer].answer === selected ? cx('correct') : cx('error')}
                            >
                                {questions[currentAnswer].answer === selected ? <CheckIcon /> : <CloseIcon />}
                                {questions[currentAnswer].answer}
                            </span>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <Button
                            primary
                            backgroundColor='rgb(103, 103, 208)'
                            borderColor='rgb(103, 103, 208)'
                            onClick={handlePrevQuiz}
                        >
                            PREV
                        </Button>
                        <Button
                            primary
                            backgroundColor='rgb(103, 103, 208)'
                            borderColor='rgb(103, 103, 208)'
                            onClick={handleNextQuiz}
                        >
                            NEXT
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}

export default AnswerBlock
