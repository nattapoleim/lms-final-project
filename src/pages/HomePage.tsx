import Hero from '@/components/homepage/Hero'
import useUserStore from '@/store/userStore'

function HomePage() {
   const { user } = useUserStore()

   return (
      <main className='h-[calc(100svh-4rem)]'>
         <Hero user={user} />
      </main>
   )
}

export default HomePage
