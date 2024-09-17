import { User } from '@/models/User'

export class AuthService {
   static async register(name: string, username: string, password: string): Promise<User> {
      const newUser = await User.create(Date.now(), name, username, password)
      const users = (await User.loadUsersFromLocalStorage()) || []
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      return newUser
   }

   static async login(username: string, password: string): Promise<User | null> {
      const users = await User.loadUsersFromLocalStorage()
      if (users) {
         const user = users.find(user => user.username === username)
         if (user && (await user.verifyPassword(password))) {
            user.saveToLocalStorage()
            return user
         }
      }
      return null
   }

   static logout(): void {
      localStorage.removeItem('currentUser')
   }

   static async getCurrentUser(): Promise<User | null> {
      return await User.loadFromLocalStorage()
   }
}
