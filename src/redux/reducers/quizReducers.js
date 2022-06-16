import { START_QUIZ, TIME_OUT, QUIZ_NEXT, QUIZ_SUBMIT, QUIZ_SHOW_ANSWER} from '../constant/quizConstants'

const initialState = {
    time: 10,
    activeQuestion: 0,
    activeQuestionShow: 0,
    answers: [],
    showAnswer: false,
    isFinished: false,
}

function quizReducers(state = initialState, action) {
    switch (action.type) {
        case START_QUIZ: {
            return {
                ...state,
                time: action.payload.time,
            }
        }

        case TIME_OUT: {
            return {
                ...state,
                time: 0,
                showModal: true,
                isFinished: true
            }
        }

        case QUIZ_NEXT: {
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1,
                answers: [...action.payload.answers]
            }
        }

        case QUIZ_SUBMIT: {
            return {
                ...state,
                answers: action.payload.answers,
                time: action.payload.time,
                isFinished: action.payload.isFinished
            }
        }

        case QUIZ_SHOW_ANSWER: {
            console.log(state.answers)
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
