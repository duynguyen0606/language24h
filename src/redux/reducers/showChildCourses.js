const initialState = []

function childCourses(state = initialState, action) {
    switch (action.type) {
        case 'SHOW': {
            console.log(action.payload)
            return state
        }

        default:
            return state
    }
}
export default childCourses
