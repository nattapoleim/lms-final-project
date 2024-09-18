import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Course } from '@/models/Course'

type CourseListProps = {
   courses: Course[]
}

function CourseList({ courses }: CourseListProps) {
   return (
      <div className='grid w-full gap-4 md:grid-cols-2 lg:gap-10 lg:grid-cols-3'>
         {courses.map(course => (
            <Card
               key={course.id}
               className='max-w-[350px] h-[400px] flex flex-col justify-between overflow-hidden'
            >
               <CardHeader className='p-0'>
                  <img
                     src={course.image}
                     alt={course.name}
                     width={350}
                     height={200}
                     className='object-cover w-full h-[200px]'
                  />
               </CardHeader>
               <CardContent className='p-4'>
                  <CardTitle className='mb-2 text-xl'>{course.name}</CardTitle>
                  <p className='text-sm text-muted-foreground'>{course.description}</p>
               </CardContent>
               <CardFooter className='p-4 h-[4rem]'>
                  <Button className='w-full'>Enroll Now</Button>
               </CardFooter>
            </Card>
         ))}
      </div>
   )
}

export default CourseList
