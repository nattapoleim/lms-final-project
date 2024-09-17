import NavbarDrawer from '@/components/NavbarDrawer'
import NavbarProfileDropdown from '@/components/NavbarProfileDropdown'
import { Button } from '@/components/ui/button'
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Course } from '@/models/Course'
import { DataManager } from '@/services/DataManager'
import useUserStore from '@/store/userStore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const dataManager = new DataManager()

function Navbar() {
   const { user } = useUserStore()
   const [courses, setCourses] = useState<Course[]>([])
   const [error, setError] = useState<string | null>(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            await dataManager.fetchCourse()
            setCourses(dataManager.courses)
         } catch (error) {
            console.error('Error Fetching Data from API - Navbar', error)
            setError('Failed to load courses. Please try again later.')
         }
      }
      fetchData()
   }, [courses])

   return (
      <header className='sticky inset-x-0 top-0 h-16 shadow'>
         <nav className='container flex items-center justify-between h-full'>
            <Link to='/' className='text-3xl font-medium tracking-wider'>
               VAAN<span className='font-light text-primary/70'>DEMY.</span>
            </Link>
            <div className='items-center justify-center flex-1 hidden gap-10 md:flex'>
               <NavigationMenu>
                  <NavigationMenuList>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link to='/' className={navigationMenuTriggerStyle()}>
                              Home
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                        <NavigationMenuContent>
                           <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                              {error ? (
                                 <li className='col-span-2 text-center uppercase'>{error}</li>
                              ) : courses.length > 0 ? (
                                 courses.map(course => (
                                    <li key={course.id}>
                                       <NavigationMenuLink asChild>
                                          <Link
                                             to={`/courses/${course.name}`}
                                             className={cn(
                                                'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                             )}
                                          >
                                             <div className='text-sm font-medium leading-none text-blue-600'>
                                                {course.name}
                                             </div>
                                             <p className='text-sm leading-snug line-clamp-2 text-muted-foreground'>
                                                {course.description}
                                             </p>
                                          </Link>
                                       </NavigationMenuLink>
                                    </li>
                                 ))
                              ) : (
                                 <li>Loading courses...</li>
                              )}
                           </ul>
                        </NavigationMenuContent>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link to='/about' className={navigationMenuTriggerStyle()}>
                              About
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                  </NavigationMenuList>
               </NavigationMenu>
            </div>

            <div className='items-center hidden gap-4 md:flex'>
               {!user ? (
                  <>
                     <Link to='/login'>
                        <Button variant='outline'>Log in</Button>
                     </Link>
                     <Link to='/register'>
                        <Button variant='default'>Get Started Free</Button>
                     </Link>
                  </>
               ) : (
                  <div className='ml-24'>
                     <NavbarProfileDropdown />
                  </div>
               )}
            </div>
            <div className='block md:hidden'>
               <NavbarDrawer />
            </div>
         </nav>
      </header>
   )
}

export default Navbar
