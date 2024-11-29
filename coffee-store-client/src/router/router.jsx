import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import AddCoffee from '../pages/AddCoffee'
import Products from '../pages/Products'
import UpdateCoffee from '../pages/UpdateCoffee'
import Auth from '../pages/Auth'
import Login from '../authentication/Login'
import SignUp from '../authentication/SignUp'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Products></Products>,
                loader: ()=> fetch('http://localhost:5000/coffee')
            },
            {
                path: '/update/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
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

