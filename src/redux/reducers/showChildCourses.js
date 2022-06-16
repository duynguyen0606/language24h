const initialState = []

function childCourses(state = initialState, action) {
    switch (action.type) {
        case 'SHOW': {
            return state
        }

        default:
            return state
    }
}
export default childCourses
