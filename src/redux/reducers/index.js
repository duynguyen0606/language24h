import { combineReducers } from 'redux'
import categoryReducers from './categoryReducers'
import childCourses from './showChildCourses'
import quizReducers from './quizReducers'

const rootReducer = combineReducers({
    category: categoryReducers,
    childCourses: childCourses,
    quizReducers: quizReducers
})

export default rootReducer
