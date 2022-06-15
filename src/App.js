import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import Test from './pages/Test'
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
                        <Route path='/test' element={<Test />} />
                    </Routes>
                </DefaultLayout>
            </div>
        </Router>
    )
}

export default App
