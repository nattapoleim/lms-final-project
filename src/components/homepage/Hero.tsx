import HeroVideo from '@/assets/hero-v.webm'
import { Button } from '@/components/ui/button'
import { User } from '@/models/User'
import { Link } from 'react-router-dom'

function Hero({ user }: { user: User | null }) {
   return (
      <section className='bg-[#f9f9f9]'>
         <div className='container flex flex-col-reverse items-center justify-center gap-10 py-10 lg:gap-0 lg:flex-row'>
            <div className='flex flex-col items-center justify-center gap-4 ml-10 text-center sm:gap-10 lg:text-start lg:items-start'>
               <h1 className='text-2xl font-medium sm:text-4xl md:text-5xl'>
                  Online Courses Improve your programming skills
               </h1>
               <p className='text-sm sm:text-lg md:w-2/3 text-slate-500'>
                  Complete with workshops and Bootcamp to help upgrade your skills. Let you work
                  better!
               </p>
               {user ? (
                  <Link className='mt-6 sm:mt-0' to='/courses'>
                     <Button size='lg' className='uppercase'>
                        All Courses
                     </Button>
                  </Link>
               ) : (
                  <Link className='mt-6 sm:mt-0' to='/register'>
                     <Button size='lg' className='uppercase'>
                        Get Started Free
                     </Button>
                  </Link>
               )}
            </div>
            <div>
               <video preload='auto' muted playsInline autoPlay loop>
                  <source src={HeroVideo} type='video/webm' />
               </video>
            </div>
         </div>
      </section>
   )
}

export default Hero
