import { Button } from '@/components/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AuthService } from '@/services/AuthService'
import useUserStore from '@/store/userStore'
import { useNavigate } from 'react-router-dom'

function NavbarProfileDropdown() {
   const { user, setUser } = useUserStore()
   const navigate = useNavigate()

   const hadleLogout = () => {
      AuthService.logout()
      setUser(null)
      navigate('/')
   }
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant={'outline'}>{user?.name.split(' ')[0]}</Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
               <DropdownMenuItem disabled>Profile</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={hadleLogout} className='cursor-pointer'>
               Log out
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

export default NavbarProfileDropdown
