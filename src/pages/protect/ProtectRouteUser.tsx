import useUserStore from '@/store/userStore'
import { Navigate } from 'react-router-dom'

type ProtectRouteUserProps = {
   children: React.ReactNode
}

const ProtectRouteUser: React.FC<ProtectRouteUserProps> = ({ children }) => {
   const { user } = useUserStore()

   if (user) {
      return <Navigate to='/' replace={true} />
   }

   return children
}

export default ProtectRouteUser
