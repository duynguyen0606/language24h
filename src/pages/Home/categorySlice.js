import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listIds: [],
    coursesList: [],
}

const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        getCoursesByCategoryId(state, action) {
            if (state.listIds.includes(action.payload.id)) {
                return state
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
        },
    },
})

const { reducer, actions } = categorySlice
export const { getCoursesByCategoryId } = actions
export default reducer
