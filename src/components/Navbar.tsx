import NavbarDrawer from '@/components/NavbarDrawer'
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
import { Link } from 'react-router-dom'

const courses = [
   {
      category: 'Programming Fundamentals',
      image: '/static/intro_to_python.jpg',
      description:
         'Learn the basics of Python, a popular programming language for both beginners and experts.',
      id: 1,
      name: 'Intro to Python',
   },
   {
      category: 'Web Development',
      image: '/static/advance_javascript.jpg',
      description: 'Take your JavaScript skills to the next level with this advanced course.',
      id: 2,
      name: 'Advanced JavaScript',
   },
   {
      category: 'Machine Learning',
      image: '/static/machine_learning_with_tensorflow.jpg',
      description:
         'Learn how to build machine learning models using the popular TensorFlow library.',
      id: 3,
      name: 'Machine Learning with TensorFlow',
   },
   {
      category: 'Data Science',
      image: '/static/data_science_with_r.jpg',
      description: 'Explore the world of data science using the R programming language.',
      id: 4,
      name: 'Data Science with R',
   },
]

function Navbar() {
   return (
      <header className='sticky inset-x-0 top-0 h-16 shadow'>
         <nav className='container flex items-center justify-between h-full'>
            <Link to='/' className='text-3xl font-medium tracking-wider'>
               VAAN<span className='font-light text-primary/70'>DEMY.</span>
            </Link>
            <div className='items-center hidden gap-10 md:flex'>
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
                              {courses.map(course => (
                                 <li key={course.id}>
                                    <NavigationMenuLink asChild>
                                       <Link
                                          to={`/courses/${course.name}`}
                                          className={cn(
                                             'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                          )}
                                       >
                                          <div className='text-sm font-medium leading-none'>
                                             {course.name}
                                          </div>
                                          <p className='text-sm leading-snug line-clamp-2 text-muted-foreground'>
                                             {course.description}
                                          </p>
                                       </Link>
                                    </NavigationMenuLink>
                                 </li>
                              ))}
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
               <Link to='/login'>
                  <Button variant='outline'>Log in</Button>
               </Link>
               <Link to='/register'>
                  <Button variant='default'>Get Started Free</Button>
               </Link>
            </div>
            <div className='block md:hidden'>
               <NavbarDrawer />
            </div>
         </nav>
      </header>
   )
}

export default Navbar
