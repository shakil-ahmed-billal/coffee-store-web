import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from "../firebase/firebase.config"


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [users , setUsers] = useState(null)
    const [loading , setLoading] = useState(true)

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signInUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }
    const authInfo = {
        users,
        loading,
        setUsers,
        setLoading,
        createUser,
        signInUser
    }

  return (
    <AuthContext.Provider value={authInfo}>
      {/* auth provider children render */}
      {children}
    </AuthContext.Provider >
  )
}

export default AuthProvider
