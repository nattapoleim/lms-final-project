import { Button } from '@/components/ui/button'
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet'
import { AuthService } from '@/services/AuthService'
import useUserStore from '@/store/userStore'

import { Menu } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavbarDrawer() {
   const { user, setUser } = useUserStore()
   const navigate = useNavigate()

   const hadleLogout = () => {
      AuthService.logout()
      setUser(null)
      navigate('/')
   }

   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button variant={'outline'}>
               <Menu />
            </Button>
         </SheetTrigger>
         <SheetContent>
            <SheetHeader>
               <SheetTitle className='tracking-wider'>VAANDEMY.</SheetTitle>
               <SheetDescription>Menu</SheetDescription>
            </SheetHeader>

            <div className='grid gap-4 mt-10 mb-4 text-center'>
               <NavLink title='Home' path='/' btnStyle='ghost' />
               <NavLink title='Courses' path='/courses' btnStyle='ghost' />
               <NavLink title='About' path='/about' btnStyle='ghost' />
               {user ? (
                  <>
                     <NavLink title='Profile' path='/profile' btnStyle='ghost' />
                     <SheetClose asChild>
                        <Button
                           size='lg'
                           className='w-full text-lg font-light tracking-wider'
                           variant='outline'
                           onClick={hadleLogout}
                        >
                           Log out
                        </Button>
                     </SheetClose>
                  </>
               ) : (
                  <>
                     <NavLink title='Log in' path='/login' btnStyle='outline' />
                     <NavLink title='Get Started Free' path='/register' btnStyle='default' />
                  </>
               )}
            </div>
         </SheetContent>
      </Sheet>
   )
}

const NavLink: React.FC<{
   title: string
   path: string
   btnStyle:
      | 'default'
      | 'link'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
      | null
      | undefined
}> = ({ title, path, btnStyle }) => {
   return (
      <SheetClose asChild>
         <Link to={path}>
            <Button
               size='lg'
               className='w-full text-lg font-light tracking-wider'
               variant={btnStyle}
            >
               {title}
            </Button>
         </Link>
      </SheetClose>
   )
}
