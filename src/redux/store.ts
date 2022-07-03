import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import quizTestSlice from '../pages/QuizTest/quizTestSlice'
import categorySlice from '../pages/Home/categorySlice'
import childCoursesSlice from '../pages/Course/courseSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { createTransform } from 'redux-persist'

// const SetTransform = createTransform((inboundState, key) => {
//     return { ...inboundState, mySet: [...inboundState.mySet] }
// })

const quizzPersistConfig = {
    key: 'quizTest',
    storage
    // transforms: [SetTransform]
}

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['quizReducers']
    // transforms: [SetTransform]
}

const rootReducers = combineReducers({
    quizReducers: persistReducer(quizzPersistConfig, quizTestSlice),
    category: categorySlice,
    childCourses: childCoursesSlice
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export default store
