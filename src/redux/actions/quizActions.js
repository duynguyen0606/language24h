import { START_QUIZ, TIME_OUT, QUIZ_NEXT, QUIZ_SUBMIT, QUIZ_SHOW_ANSWER } from '../constant/quizConstants'

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

export const quizNext = (answers) => {
    return {
        type: QUIZ_NEXT,
        payload: {
            answers: answers,
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

export const quizShowAnswer = () => {
    return {
        type: QUIZ_SHOW_ANSWER
    }
}
