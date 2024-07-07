// "use client"
// import { UserSession } from "@/types"
// import { createContext , useContext, useState, useEffect} from "react"

// interface AuthContextProps {
//     userData: UserSession | null;
//     setUserData: (userData: UserSession | null) => void;
// }

// const AuthContext = createContext<AuthContextProps>({
//     userData: null,
//     setUserData: () => {}
// })

// interface AuthProviderProps {
//     children: React.ReactElement
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
//     const [userData, setUserData] = useState<UserSession | null>(null)

//     console.log(userData)
//     useEffect(()=> {
//         if(userData) {
//           localStorage.setItem("userSession", JSON.stringify({token: userData.token, userData: userData }))
//         }
//         }, [userData])
  
//     useEffect(()=> {

//         if(typeof window !== "undefined" && window.localStorage ) {
   
//         const userData = localStorage.getItem("userSession")
//         setUserData(JSON.parse(userData!))
   
//         }
//       }, [])


//     return (
//         <AuthContext.Provider value={{userData, setUserData}} >
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => useContext(AuthContext)