import useUserStore from '@/store/userStore'

function ProfilePage() {
   const { user } = useUserStore()

   return (
      <section className='h-[calc(100svh-4rem)] flex flex-col items-center justify-center gap-6'>
         <h1>Profile</h1>
         <h2>{user?.name}</h2>
         <p>{user?.username}</p>
      </section>
   )
}

export default ProfilePage
