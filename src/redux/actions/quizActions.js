import {
    START_QUIZ,
    TIME_OUT,
    QUIZ_NEXT,
    QUIZ_SUBMIT,
    QUIZ_SHOW_ANSWER,
    TIMER_COUNT_DOWN,
    RANDOM_QUESTIONS,
} from '../constant/quizConstants'

export const randomQuestionsAction = (randomQuestions) => {
    return {
        type: RANDOM_QUESTIONS,
        payload: {
            randomQuestions: randomQuestions,
        },
    }
}

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
        type: QUIZ_SHOW_ANSWER,
    }
}

export const quizCountDown = (timer) => {
    return {
        type: TIMER_COUNT_DOWN,
        payload: {
            timer: timer,
        },
    }
}
