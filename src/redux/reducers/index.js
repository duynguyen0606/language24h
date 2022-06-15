import { combineReducers } from 'redux'
import categoryReducers from './categoryReducers'
import childCourses from './showChildCourses'

const rootReducer = combineReducers({
    category: categoryReducers,
    childCourses: childCourses,
})

export default rootReducer
