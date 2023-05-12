import { createContext, useContext, useState, useEffect } from "react";
import {auth} from '../firebase'



const AuthContext = createContext()



 const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
      }
      function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
      }

      function logout() {
        return auth.signOut()
      }
      function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
      }

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
        //  setLoading(false)
        })
    
        return unsubscribe
      }, [])
    
    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
    }




    return <AuthContext.Provider value={value}>
                 {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}


export default AuthProvider;


