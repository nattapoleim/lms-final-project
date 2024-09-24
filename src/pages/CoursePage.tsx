import { Course } from '@/models/Course'
import { DataManager } from '@/services/DataManager'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const dataManager = new DataManager()

function CoursePage() {
   const { courseId } = useParams()
   const [course, setCourse] = useState<Course | null>(null)

   useEffect(() => {
      if (courseId) {
         const fetchCourse = async () => {
            await dataManager.fetchCourseById(courseId)
            setCourse(dataManager.courses[0])
         }
         fetchCourse()
      }
   }, [course, courseId])

   return (
      <section className='min-h-[calc(100svh-4rem)] space-y-4'>
         <h1 className='text-5xl'>{course?.name}</h1>
         <img src={course?.image} alt={course?.name} width={500} />
         <p>{course?.description}</p>
         <div className='p-10 border'>
            <h2 className='text-xl font-bold'>lectures</h2>
            <ul>
               {course?.lectures.map((lecture, index) => (
                  <li key={index}>{lecture.title}</li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default CoursePage
