import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import Dashboard from '../pages/Dashboard'
import User from '@/pages/User'
import UserEdit from '@/pages/User/pages/UserEdit'
import Order from '@/pages/Order'
import OrderEdit from '@/pages/Order/OrderEdit'
import Product from '@/pages/Product'
import ProductEdit from '@/pages/Product/ProductEdit'

const router = createBrowserRouter([
  { path: '/', element: <Layout />, 
  children: [{ path: '/dashboard', element: <Dashboard /> },
{path:'/users',element:<User/>},
{path:'/users/edit',element:<UserEdit/>},
{path:'/orders',element:<Order/>},
{path:'/orders/edit',element:<OrderEdit/>},
{path:'/products',element:<Product/>},
{path:'/products/edit',element:<ProductEdit/>},



] },
])

export default router
