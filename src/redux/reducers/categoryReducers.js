import { GET_COURSE } from '../constant/courseOfCategoryConstants'

const initialState = {
    listIds: [],
    coursesList: [],
}

function categoryReducers(state = initialState, action) {
    switch (action.type) {
        case GET_COURSE: {
            if (state.listIds.includes(action.payload.id)) {
                return {
                    ...state,
                }
            } else {
                const newListIds = [...state.listIds]
                const newCoursesList = [...state.coursesList]
                newListIds.push(action.payload.id)
                newCoursesList[action.payload.id] = action.payload.coursesList

                return {
                    ...state,
                    listIds: newListIds,
                    coursesList: newCoursesList,
                }
            }
        }
        default:
            return state
    }
}

export default categoryReducers
