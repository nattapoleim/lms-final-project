import useUserStore from '@/store/userStore'
import { Navigate } from 'react-router-dom'

type ProtectRouteProps = {
   children: React.ReactNode
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {
   const { user } = useUserStore()

   if (!user) {
      return <Navigate to='/login' replace={true} />
   }

   return children
}

export default ProtectRoute
