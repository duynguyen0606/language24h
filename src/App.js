import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import QuizTest from './pages/QuizTest'
import DefaultLayout from './components/Layouts/DefaultLayout'
function App() {
    return (
        <Router>
            <div className='App'>
                <DefaultLayout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/course'>
                            <Route path=':courseId' element={<Course />} />
                        </Route>
                        <Route path='/test' element={<QuizTest />} />
                    </Routes>
                </DefaultLayout>
            </div>
        </Router>
    )
}

export default App
