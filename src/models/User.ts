import bcrypt from 'bcryptjs'

export class User {
   id: number
   name: string
   username: string
   private passwordHash: string = ''
   lectureCompleted: number[]

   private constructor(id: number, name: string, username: string, passwordHash: string) {
      this.id = id
      this.name = name
      this.username = username
      this.passwordHash = passwordHash
      this.lectureCompleted = []
   }

   static async create(id: number, name: string, username: string, password: string) {
      const passwordHash = await bcrypt.hash(password, 10)
      return new User(id, name, username, passwordHash)
   }

   async verifyPassword(password: string): Promise<boolean> {
      return await bcrypt.compare(password, this.passwordHash)
   }

   completeLecture(lectureId: number): void {
      if (!this.lectureCompleted.includes(lectureId)) {
         this.lectureCompleted.push(lectureId)
         this.saveProgress()
      }
   }

   isLectureCompleted(lectureId: number): boolean {
      return this.lectureCompleted.includes(lectureId)
   }

   private saveProgress(): void {
      localStorage.setItem(`user_progress_${this.id}`, JSON.stringify(this.lectureCompleted))
   }

   private loadProgress(): void {
      const progress = localStorage.getItem(`user_progress_${this.id}`)
      if (progress) {
         this.lectureCompleted = JSON.parse(progress)
      }
   }

   toJSON() {
      return {
         id: this.id,
         name: this.name,
         username: this.username,
         passwordHash: this.passwordHash,
         lectureCompleted: this.lectureCompleted,
      }
   }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   static async fromJSON(data: any): Promise<User> {
      const user = new User(data.id, data.name, data.username, data.passwordHash)
      user.lectureCompleted = data.lecturesCompleted || []
      return user
   }

   saveToLocalStorage(): void {
      const userData = this.toJSON()
      localStorage.setItem('currentUser', JSON.stringify(userData))
   }

   static async loadFromLocalStorage(): Promise<User | null> {
      const userData = localStorage.getItem('currentUser')
      if (userData) {
         const data = JSON.parse(userData)
         const user = await User.fromJSON(data)
         user.loadProgress()
         return user
      }
      return null
   }

   static async loadUsersFromLocalStorage(): Promise<User[]> {
      const usersData = localStorage.getItem('users')
      if (usersData) {
         const usersJSON = JSON.parse(usersData)
         return Promise.all(usersJSON.map(User.fromJSON))
      }
      return []
   }
}
