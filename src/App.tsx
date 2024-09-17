import Navbar from '@/components/Navbar'
import AboutPage from '@/pages/AboutPage'
import CoursePage from '@/pages/CoursePage'
import HomePage from '@/pages/HomePage'
import LecturePage from '@/pages/LecturePage'
import LoginPage from '@/pages/LoginPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ProtectRoute from '@/pages/ProtectRoute'
import RegisterPage from '@/pages/RegisterPage'
import useUserStore from '@/store/userStore'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
   const { loadUser, user } = useUserStore()

   useEffect(() => {
      loadUser()
   }, [loadUser, user])

   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/courses/:courseName' element={<CoursePage />} />
            <Route
               path='/courses/:courseName/:lectureId'
               element={
                  <ProtectRoute>
                     <LecturePage />
                  </ProtectRoute>
               }
            />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
