import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    questions: {
        question: string
        choices: string[]
        answer: string
    }[]
    time: number
    timerCountDown: number
    activeQuestion: number
    answers: {
        q: string
        a: string
    }[]
    showAnswer: boolean
    isFinished: boolean
}

const initialState: InitialState = {
    questions: [],
    time: 100,
    timerCountDown: 100,
    activeQuestion: 0,
    answers: [],
    showAnswer: false,
    isFinished: false
}

const quizTestSlice = createSlice({
    name: 'quizz',
    initialState: initialState,
    reducers: {
        randomQuestionsAction: (state, action) => {
            state.questions = action.payload.questions
        },

        startQuiz: (state, action) => {
            state.time = action.payload.time
        },

        timeOut: (state) => {
            state.isFinished = true
        },

        quizNext: (state, action) => {
            state.activeQuestion = state.activeQuestion + 1
            state.answers = action.payload.answers
        },

        quizSubmit: (state, action) => {
            state.answers = action.payload.answers
            state.time = action.payload.time
            state.isFinished = true
        },

        quizShowAnswer: (state) => {
            state.showAnswer = true
        },

        quizCountDown: (state, action) => {
            state.timerCountDown = action.payload.timerCountDown
        }
    }
})

const { actions, reducer } = quizTestSlice
export const { randomQuestionsAction, startQuiz, timeOut, quizNext, quizSubmit, quizShowAnswer, quizCountDown } =
    actions
export default reducer
