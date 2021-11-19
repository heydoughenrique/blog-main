// AKA 404 Page 
import { useRouter } from 'next/router'

const ClientDashboard = () => {
  const router = useRouter()
  const { clientId } = router.query

  return <p>You tried to access the page: https://strides.digital/{clientId} but it doesn't exist. Sorry</p>;
}

export default ClientDashboard