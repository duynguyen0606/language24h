import { createSlice } from '@reduxjs/toolkit'

const initialState: {
    [key: string]: any
} = {}

const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        getCoursesByCategoryId(state, action) {
            const sectionId = action.payload.sectionId
            const id = action.payload.id
            const coursesList = action.payload.coursesList

            if (state[sectionId]) {
                if (state[sectionId].listIds.includes(id)) {
                    return state
                } else {
                    state[sectionId].listIds.push(id)
                    state[sectionId].coursesList[id] = coursesList
                }
            } else {
                state[sectionId] = {
                    listIds: [id],
                    coursesList: [coursesList]
                }
            }
        }
    }
})

const { reducer, actions } = categorySlice
export const { getCoursesByCategoryId } = actions
export default reducer
