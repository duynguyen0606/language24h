import { GET_COURSE } from "../constant/courseOfCategory"

export const getCoursesByCategoryId = (id, courses) => {
    return {
        type: GET_COURSE,
        payload: {
            id: id,
            coursesList: courses,
        },
    }
}

export const showChildCoursesById = (id, show) => {
    return {
        type: 'SHOW',
        payload: {
            id: id,
            show: show
        }
    }
} 
