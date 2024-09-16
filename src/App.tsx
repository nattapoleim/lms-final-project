import Navbar from '@/components/Navbar'
import AboutPage from '@/pages/AboutPage'
import CoursePage from '@/pages/CoursePage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import NotFoundPage from '@/pages/NotFoundPage'
import RegisterPage from '@/pages/RegisterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/courses/:param' element={<CoursePage />} />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
