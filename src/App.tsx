import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import AboutPage from '@/pages/AboutPage'
import AllCoursesPage from '@/pages/AllCoursesPage'
import CoursePage from '@/pages/CoursePage'
import HomePage from '@/pages/HomePage'
import LecturePage from '@/pages/LecturePage'
import LoginPage from '@/pages/LoginPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ProfilePage from '@/pages/ProfilePage'
import ProtectRoute from '@/pages/protect/ProtectRoute'
import ProtectRouteUser from '@/pages/protect/ProtectRouteUser'
import RegisterPage from '@/pages/RegisterPage'
import useUserStore from '@/store/userStore'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
   const { loadUser } = useUserStore()

   useEffect(() => {
      loadUser()
   }, [loadUser])

   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
               path='/login'
               element={
                  <ProtectRouteUser>
                     <LoginPage />
                  </ProtectRouteUser>
               }
            />
            <Route
               path='/profile'
               element={
                  <ProtectRoute>
                     <ProfilePage />
                  </ProtectRoute>
               }
            />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/courses' element={<AllCoursesPage />} />
            <Route path='/courses/:courseId' element={<CoursePage />} />
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
         <Footer />
      </BrowserRouter>
   )
}

export default App
