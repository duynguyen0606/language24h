import classNames from 'classnames/bind'
import styles from './QuizEnd.module.scss'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { quizShowAnswer } from '../../../../redux/actions/quizActions'

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

const cx = classNames.bind(styles)

function QuizEnd() {
    const dispatch = useDispatch()
    const { answers, time } = useSelector((state) => state.quizReducers)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    useEffect(() => {
        let correct = 0
        answers.forEach((answer, index) => {
            if (answer.a === data[index].answer) {
                correct++
            }
        })

        setCorrectAnswers(correct)
    }, [])

    const handleSeeResult = () => {
        dispatch(quizShowAnswer())
    }

    return (
        <div className={cx('wrapper')}>
            <header>
                <h2>Your result</h2>
            </header>
            <div className={cx('result-item')}>{correctAnswers} of 5</div>
            <div className={cx('result-item')}>{`${Math.round((correctAnswers / data.length) * 100)}%`} </div>
            <div className={cx('result-item')}>Your time: {time} seconds</div>
            <div className={cx('result-item')}>
                <Button onClick={handleSeeResult} primary>
                    See your test
                </Button>
            </div>
        </div>
    )
}

export default QuizEnd
