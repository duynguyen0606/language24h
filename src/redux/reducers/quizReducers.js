import {
    START_QUIZ,
    TIME_OUT,
    QUIZ_NEXT,
    QUIZ_SUBMIT,
    QUIZ_SHOW_ANSWER,
    TIMER_COUNT_DOWN,
    RANDOM_QUESTIONS,
} from '../constant/quizConstants'

const initialState = {
    randomQuestions: null,
    time: 10,
    timerCountDown: 10,
    activeQuestion: 0,
    answers: [],
    showAnswer: false,
    isFinished: false,
}

function quizReducers(state = initialState, action) {
    switch (action.type) {
        case RANDOM_QUESTIONS: {
            return {
                ...state,
                randomQuestions: action.payload.randomQuestions,
            }
        }

        case START_QUIZ: {
            return {
                ...state,
                time: action.payload.time,
            }
        }

        case TIMER_COUNT_DOWN: {
            return {
                ...state,
                timerCountDown: action.payload.timer,
            }
        }

        case TIME_OUT: {
            return {
                ...state,
                isFinished: true,
            }
        }

        case QUIZ_NEXT: {
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1,
                answers: [...action.payload.answers],
            }
        }

        case QUIZ_SUBMIT: {
            return {
                ...state,
                answers: action.payload.answers,
                time: action.payload.time,
                isFinished: true,
            }
        }

        case QUIZ_SHOW_ANSWER: {
            return {
                ...state,
                showAnswer: true,
            }
        }

        default:
            return state
    }
}

export default quizReducers
