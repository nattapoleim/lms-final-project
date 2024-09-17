import { User } from '@/models/User'
import { create } from 'zustand'

type userStore = {
   user: User | null
   setUser: (user: User | null) => void
   loadUser: () => Promise<void>
}

const useUserStore = create<userStore>(set => ({
   user: null,
   setUser: user => set({ user }),
   loadUser: async () => {
      const user = await User.loadFromLocalStorage()
      return set({ user })
   },
}))

export default useUserStore
