export class Lecture {
   id: number
   title: string
   duration: string
   completed: boolean

   constructor(id: number, title: string, duration: string) {
      this.id = id
      this.title = title
      this.duration = duration
      this.completed = false
   }

   markAsCompleted(): void {
      this.completed = true
   }
}
