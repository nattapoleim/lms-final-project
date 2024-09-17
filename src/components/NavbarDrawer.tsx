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

import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NavbarDrawer() {
   return (
      <Sheet>
         <SheetTrigger>
            <Menu />
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
               <NavLink title='Log in' path='/login' btnStyle='outline' />
               <NavLink title='Get Started Free' path='/register' btnStyle='default' />
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
