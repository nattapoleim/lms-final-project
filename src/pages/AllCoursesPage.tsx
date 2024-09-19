import AllCoursesList from '@/components/allCoursesPage/AllCourseList'
import CategoriesList from '@/components/homepage/CategoriesList'
import { Category } from '@/models/Category'
import { Course } from '@/models/Course'
import { DataManager } from '@/services/DataManager'
import { useEffect, useState } from 'react'

const dataManager = new DataManager()

function AllCoursesPage() {
   const [courses, setCourses] = useState<Course[]>([])
   const [categories, setCategories] = useState<Category[]>([])
   const [selectedCategory, setSelectedCategory] = useState<string>('All')
   const [coursesLoading, setCoursesLoading] = useState<boolean>(false)
   const [categoriesLoading, setCategoriesLoading] = useState<boolean>(false)

   useEffect(() => {
      const fetchData = async () => {
         try {
            setCoursesLoading(true)
            setCategoriesLoading(true)
            await dataManager.fetchCourse()
            await dataManager.fetchCategories()
            setCourses(dataManager.courses)
            setCategories(dataManager.categories)
         } catch (error) {
            console.log('Error Fetching Data From API /HOMEPAGE/ :', error)
         } finally {
            setCoursesLoading(false)
            setCategoriesLoading(false)
         }
      }
      fetchData()
   }, [])

   const handleCategoryChange = async (categoryName: string) => {
      setSelectedCategory(categoryName)
      setCoursesLoading(true)
      if (categoryName) {
         await dataManager.fetchCourseByCategory(categoryName)
         setCourses(dataManager.courses)
         setCoursesLoading(false)
      } else {
         await dataManager.fetchCourse()
         setCourses(dataManager.courses)
         setCoursesLoading(false)
      }
   }

   return (
      <section className='container my-10 space-y-10'>
         <h2 className='text-3xl font-semibold'>Courses</h2>
         <div className='grid gap-4 lg:grid-cols-4'>
            <div className='lg:col-span-1'>
               <CategoriesList
                  categories={categories}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                  categoriesLoading={categoriesLoading}
               />
            </div>
            <div className='lg:col-span-3'>
               <AllCoursesList courses={courses} coursesLoading={coursesLoading} />
            </div>
         </div>
      </section>
   )
}

export default AllCoursesPage
