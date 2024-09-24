import { Category } from '@/models/Category'
import { Course } from '@/models/Course'
import { Lecture } from '@/models/Lecture'
import { User } from '@/models/User'

export class DataManager {
   courses: Course[]
   categories: Category[]
   currentUser: User | null

   constructor() {
      this.courses = []
      this.categories = []
      this.currentUser = null
   }

   async fetchCourse(): Promise<void> {
      const res = await fetch(import.meta.env.VITE_API_URL + '/courses')
      const coursesData: Course[] = await res.json()
      this.courses = coursesData.map(course => {
         const curCourse = new Course(
            course.id,
            course.name,
            course.description,
            course.image,
            course.category,
         )
         course.lectures.map(lecture =>
            curCourse.addLecture(new Lecture(lecture.id, lecture.title, lecture.duration)),
         )
         return curCourse
      })
   }

   async fetchCourseById(courseId: string): Promise<void> {
      const res = await fetch(import.meta.env.VITE_API_URL + '/courses/' + courseId)
      const courseData: Course = await res.json()
      const course = new Course(
         courseData.id,
         courseData.name,
         courseData.description,
         courseData.image,
         courseData.category,
      )
      courseData.lectures.map(lecture =>
         course.addLecture(new Lecture(lecture.id, lecture.title, lecture.duration)),
      )
      this.courses = [course]
   }

   async fetchCategories(): Promise<void> {
      const res = await fetch(import.meta.env.VITE_API_URL + '/categories')
      const categoriesData: string[] = await res.json()
      this.categories = categoriesData.map((name, index) => new Category(index + 1, name))
   }

   async fetchCourseByCategory(categoryName: string): Promise<void> {
      const res = await fetch(
         import.meta.env.VITE_API_URL + '/categories/' + categoryName + '/courses',
      )
      const courseData: Course[] = await res.json()
      this.courses = courseData.map(course => {
         const curCourse = new Course(
            course.id,
            course.name,
            course.description,
            course.image,
            course.category,
         )
         course.lectures.map(lecture =>
            curCourse.addLecture(new Lecture(lecture.id, lecture.title, lecture.duration)),
         )
         return curCourse
      })
   }
}
