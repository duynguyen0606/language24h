import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listIds: [],
}

const courseSlice = createSlice({
    name: 'courseSlice',
    initialState: initialState,
    reducers: {
        showChildCoursesById: (state, action) => {
            if (state.listIds.includes(action.payload.id)) {
                state.listIds.splice(state.listIds.indexOf(action.payload.id), 1)
            } else {
                state.listIds.push(action.payload.id)
            }
        },
    },
})

const { actions, reducer } = courseSlice
export const { showChildCoursesById } = actions
export default reducer
