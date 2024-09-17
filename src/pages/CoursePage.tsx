import { useParams } from 'react-router-dom'

function CoursePage() {
   const { courseName } = useParams()
   return (
      <div>
         <h1 className='text-5xl'>Course Page</h1>
         <h2 className='text-4xl'>{courseName}</h2>
      </div>
   )
}

export default CoursePage
