import NavbarDrawer from '@/components/navbar/NavbarDrawer'
import NavbarProfileDropdown from '@/components/navbar/NavbarProfileDropdown'
import { Button } from '@/components/ui/button'
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import useUserStore from '@/store/userStore'
import { Link } from 'react-router-dom'

function Navbar() {
   const { user } = useUserStore()

   return (
      <header className='sticky inset-x-0 top-0 h-16 bg-white'>
         <nav className='container flex items-center justify-between h-full'>
            <Link to='/' className='text-2xl font-medium tracking-wider'>
               Vaan<span className='text-primary'>demy.</span>
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
                        <NavigationMenuLink asChild>
                           <Link to='/courses' className={navigationMenuTriggerStyle()}>
                              Courses
                           </Link>
                        </NavigationMenuLink>
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
                  <div className='ml-20'>
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
