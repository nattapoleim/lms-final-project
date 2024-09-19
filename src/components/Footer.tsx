import { Link } from 'react-router-dom'

function Footer() {
   return (
      <footer className='min-h-[14rem] flex flex-col bg-foreground text-white'>
         <div className='container flex justify-between flex-1 py-10'>
            <Link to='/' className='text-3xl font-medium tracking-wider'>
               Vaan<span className='text-primary'>demy.</span>
            </Link>
            <div className='flex flex-col items-end justify-end gap-2'>
               <Link to='/' className='text-xl'>
                  Home
               </Link>
               <Link to='/courses' className='text-xl'>
                  Courses
               </Link>
               <Link to='/about' className='text-xl'>
                  About
               </Link>
            </div>
         </div>
         <p className='py-4 text-sm text-center uppercase text-slate-600'>
            © 2024 Nattapol Eiamsa-Ard
         </p>
      </footer>
   )
}

export default Footer
