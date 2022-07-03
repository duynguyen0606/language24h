import classNames from 'classnames/bind'
import styles from './QuizTest.module.scss'
import { Timer, QuestionBlock, QuizEnd, AnswerBlockShow } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
// import randomData from '../../ultils/randomData'
import { randomQuestionsAction } from './quizTestSlice'
import { RootState } from '../../redux/store'

const cx = classNames.bind(styles)

function QuizTest() {
    const isFinished = useSelector((state: RootState) => state.quizReducers.isFinished)
    const showAnswer = useSelector((state: RootState) => state.quizReducers.showAnswer)
    const dispatch = useDispatch()

    useEffect(() => {
        const url = 'http://localhost:5000/quiz-questions'

        const getQuestions = async () => {
            const data = (await axios.get(url)).data

            // const random = randomData(data)
            dispatch(
                randomQuestionsAction({
                    questions: data
                })
            )
        }

        getQuestions()
    }, [dispatch])

    return (
        <div className={cx('wrapper')}>
            <div className='container'>
                {showAnswer ? (
                    <>
                        <div className={cx('title')}>
                            <h2>Quiz test</h2>
                        </div>
                        <div className={cx('div-wrapper')}>
                            <AnswerBlockShow />
                        </div>
                    </>
                ) : isFinished ? (
                    <QuizEnd />
                ) : (
                    <>
                        <div className={cx('title')}>
                            <h2>Quiz test</h2>
                        </div>
                        <div className={cx('div-wrapper')}>
                            <Timer />
                            <QuestionBlock />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default QuizTest
