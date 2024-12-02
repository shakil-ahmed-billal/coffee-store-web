import { createBrowserRouter } from 'react-router-dom'
import Login from '../authentication/Login'
import SignUp from '../authentication/SignUp'
import MainLayout from '../layout/MainLayout'
import AddCoffee from '../pages/AddCoffee'
import Auth from '../pages/Auth'
import NewUser from '../pages/NewUser'
import Products from '../pages/Products'
import UpdateCoffee from '../pages/UpdateCoffee'
import Users from '../pages/Users'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Products></Products>,
                loader: () => fetch('https://coffee-store-server-beta-one.vercel.app/coffee')
            },
            {
                path: '/update/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`https://coffee-store-server-beta-one.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/users',
                loader: () => fetch('https://coffee-store-server-beta-one.vercel.app/users'),
                element: <Users></Users>,
            },
            {
                path: '/user/new',
                element: <NewUser></NewUser>
            }
        ]
    },
    {
        path: '/coffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: '/auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            }
        ]
    }

])

export default router

