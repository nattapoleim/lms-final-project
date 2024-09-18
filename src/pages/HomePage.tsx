import CategoriesList from '@/components/homepage/CategoriesList'
import CourseList from '@/components/homepage/CourseList'
import Hero from '@/components/homepage/Hero'
import { Category } from '@/models/Category'
import { Course } from '@/models/Course'
import { DataManager } from '@/services/DataManager'
import useUserStore from '@/store/userStore'
import { useEffect, useState } from 'react'

const dataManager = new DataManager()

function HomePage() {
   const { user } = useUserStore()
   const [courses, setCourses] = useState<Course[]>([])
   const [categories, setCategories] = useState<Category[]>([])
   const [selectedCategory, setSelectedCategory] = useState<string>('All')

   useEffect(() => {
      const fetchData = async () => {
         try {
            await dataManager.fetchCourse()
            await dataManager.fetchCategories()
            setCourses(dataManager.courses)
            setCategories(dataManager.categories)
         } catch (error) {
            console.log('Error Fetching Data From API /HOMEPAGE/ :', error)
         }
      }
      fetchData()
   }, [])

   const handleCategoryChange = async (categoryName: string) => {
      setSelectedCategory(categoryName)
      if (categoryName) {
         await dataManager.fetchCourseByCategory(categoryName)
         setCourses(dataManager.courses)
      } else {
         await dataManager.fetchCourse()
         setCourses(dataManager.courses)
      }
   }

   return (
      <main className='min-h-[calc(100svh-4rem)]'>
         <Hero user={user} />
         <section className='container my-10 space-y-6'>
            <h2 className='text-3xl font-semibold'>Courses</h2>
            <CategoriesList
               categories={categories}
               selectedCategory={selectedCategory}
               handleCategoryChange={handleCategoryChange}
            />
            <CourseList courses={courses} />
         </section>
      </main>
   )
}

export default HomePage
