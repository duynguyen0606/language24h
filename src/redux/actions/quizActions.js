import { START_QUIZ, TIME_OUT, QUIZ_NEXT, QUIZ_SUBMIT } from '../constant/quizConstants'

export const startQuiz = (time) => {
    return {
        type: START_QUIZ,
        payload: {
            time: time,
        },
    }
}

export const timeOut = () => {
    return {
        type: TIME_OUT,
    }
}

export const quizNext = (answer) => {
    return {
        type: QUIZ_NEXT,
        payload: {
            answer: answer,
        },
    }
}

export const quizSubmit = (answers, time, isFinished) => {
    return {
        type: QUIZ_SUBMIT,
        payload: {
            answers: answers,
            time: time,
            isFinished: isFinished,
        },
    }
}
