import { START_QUIZ, TIME_OUT, QUIZ_NEXT, QUIZ_SUBMIT} from '../constant/quizConstants'

const initialState = {
    time: 10,
    activeQuestion: 0,
    answers: [],
    showModal: false,
    isFinished: false
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
                answers: [...action.payload.answer]
            }
        }

        case QUIZ_SUBMIT: {
            console.log(action.payload)
            return {
                ...state,
                answers: action.payload.answer,
                time: action.payload.time,
                isFinished: action.payload.isFinished
            }
        }

        default:
            return state
    }
}

export default quizReducers
