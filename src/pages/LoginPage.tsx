import {
   AlertDialog,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthService } from '@/services/AuthService'
import useStore from '@/store/userStore'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

type LoginInputs = {
   username: string
   password: string
}

function LoginPage() {
   const [alertOpen, setAlertOpen] = useState<boolean>(false)
   const { register, handleSubmit } = useForm<LoginInputs>()
   const navigate = useNavigate()

   const { loadUser } = useStore()

   const handleLogin: SubmitHandler<LoginInputs> = async data => {
      const { username, password } = data
      const user = await AuthService.login(username, password)
      if (user) {
         console.log('Login Successful')
         loadUser()
         return navigate('/')
      } else {
         console.log('login failed')
         setAlertOpen(true)
      }
   }

   return (
      <section className='container h-[calc(100svh-4rem)]'>
         <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
            <AlertDialogContent>
               <AlertDialogHeader>
                  <AlertDialogTitle>Login Failed</AlertDialogTitle>
                  <AlertDialogDescription>Username or Password not invalid.</AlertDialogDescription>
               </AlertDialogHeader>
               <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>
         <main className='grid items-center justify-center h-full'>
            <div className='w-[20rem] sm:w-[27rem] p-4 sm:p-10 mx-auto border rounded-md shadow w-md'>
               <h1 className='mb-4 text-4xl font-bold text-center text-primary'>Login</h1>
               <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>
                  <Input placeholder='Username' {...register('username')} type='text' required />
                  <Input
                     placeholder='Password'
                     {...register('password')}
                     type='password'
                     required
                  />
                  <Button className='w-full'>Login</Button>
               </form>
               <Link
                  to='/register'
                  className='flex items-center justify-center mt-4 text-sm font-light'
               >
                  Don't have an account ?
                  <Button variant='link' className='px-2 text-sm font-light text-blue-500 '>
                     Register now
                  </Button>
               </Link>
            </div>
         </main>
      </section>
   )
}

export default LoginPage
