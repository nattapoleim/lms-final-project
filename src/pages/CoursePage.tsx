import { useParams } from 'react-router-dom'

function CoursePage() {
   const { param } = useParams()
   return (
      <div>
         <h1 className='text-5xl'>Course Page</h1>
         <h2 className='text-4xl'>{param}</h2>
      </div>
   )
}

export default CoursePage
