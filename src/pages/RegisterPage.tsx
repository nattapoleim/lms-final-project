import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

// components
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

type ResigerInputs = {
   name: string
   username: string
   password: string
   confirmPassword: string
}

function RegisterPage() {
   const [alertOpen, setAlertOpen] = useState<boolean>(false)
   const [alertMsg, setAlertMsg] = useState<{ title: string; content: string }>({
      title: '',
      content: '',
   })
   const { register, handleSubmit } = useForm<ResigerInputs>()
   const navigate = useNavigate()

   const registerSubmit: SubmitHandler<ResigerInputs> = async data => {
      const { name, username, password, confirmPassword } = data

      if (password === confirmPassword) {
         const user = await AuthService.register(name, username, password)
         console.log('Register Successful', user)
         return navigate('/login')
      } else {
         setAlertMsg({
            title: 'Register Failed',
            content: 'Password and Confirm Password do not match!',
         })
         setAlertOpen(true)
      }
   }

   return (
      <section className='container h-[calc(100svh-4rem)]'>
         <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
            <AlertDialogContent>
               <AlertDialogHeader>
                  <AlertDialogTitle>{alertMsg.title}</AlertDialogTitle>
                  <AlertDialogDescription>{alertMsg.content}</AlertDialogDescription>
               </AlertDialogHeader>
               <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>
         <main className='grid items-center justify-center h-full'>
            <div className='w-[20rem] sm:w-[27rem] p-4 sm:p-10 border rounded-md shadow w-md'>
               <h1 className='mb-4 text-4xl font-bold text-center text-primary'>Register</h1>
               <form className='space-y-4' onSubmit={handleSubmit(registerSubmit)}>
                  <Input placeholder='Name' {...register('name')} type='text' required />
                  <Input placeholder='Username' {...register('username')} type='text' required />
                  <Input
                     placeholder='Password'
                     {...register('password')}
                     type='password'
                     required
                  />
                  <Input
                     placeholder='Comfirm Password'
                     {...register('confirmPassword')}
                     type='password'
                     required
                  />
                  <Button className='w-full'>Register</Button>
               </form>
               <Link
                  to='/login'
                  className='flex items-center justify-center mt-4 text-sm font-light'
               >
                  Already have an account?
                  <Button variant='link' className='px-2 text-sm font-light text-blue-500 '>
                     Login
                  </Button>
               </Link>
            </div>
         </main>
      </section>
   )
}

export default RegisterPage
