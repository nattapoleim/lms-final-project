import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Course } from '@/models/Course'

type CourseListProps = {
   courses: Course[]
   coursesLoading: boolean
}

function CourseList({ courses, coursesLoading }: CourseListProps) {
   return (
      <div className='grid justify-center w-full gap-4 sm:justify-start md:grid-cols-2 lg:gap-10 lg:grid-cols-3 2xl:grid-cols-4'>
         {!coursesLoading ? (
            <>
               {' '}
               {courses.map(course => (
                  <Card
                     key={course.id}
                     className='max-w-[350px] group transition-all hover:shadow-lg hover:-translate-y-2 h-[400px] flex flex-col justify-between overflow-hidden'
                  >
                     <CardHeader className='p-0'>
                        <img
                           src={course.image}
                           alt={course.name}
                           width={350}
                           height={200}
                           className='object-cover group-hover:scale-105 transition-all w-full h-[200px]'
                        />
                     </CardHeader>
                     <CardContent className='p-4'>
                        <CardTitle className='mb-2 text-xl'>{course.name}</CardTitle>
                        <p className='text-sm text-muted-foreground'>{course.description}</p>
                     </CardContent>
                     <CardFooter className='p-4 h-[4rem]'>
                        <Button className='w-full'>Learn More</Button>
                     </CardFooter>
                  </Card>
               ))}{' '}
            </>
         ) : (
            <>
               {Array.from({ length: 3 }).map((_, index) => (
                  <Card
                     key={index}
                     className='max-w-[350px] group transition-all hover:shadow-lg hover:-translate-y-2 h-[400px] flex flex-col justify-between overflow-hidden'
                  >
                     <CardHeader className='p-0'>
                        <Skeleton className='object-cover group-hover:scale-105 transition-all w-[350px] h-[200px]' />
                     </CardHeader>
                     <CardContent className='p-4'>
                        <CardTitle className='mb-2 text-xl'>
                           <Skeleton className='w-1/2 h-6' />
                        </CardTitle>
                        <div className='space-y-1'>
                           <Skeleton className='w-full h-4' />
                           <Skeleton className='w-full h-4' />
                           <Skeleton className='w-full h-4' />
                        </div>
                     </CardContent>
                     <CardFooter className='p-4 h-[4rem]'>
                        {/* <Button className='w-full'>Learn More</Button> */}
                        <Skeleton className='w-full h-10 rounded' />
                     </CardFooter>
                  </Card>
               ))}
            </>
         )}
      </div>
   )
}

export default CourseList
