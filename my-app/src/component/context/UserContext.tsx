import React, { useContext} from "react";

type UserProviderProps = {
    children: React.ReactNode
}
export type UserContextProps = {
    user: string
    setUser:React.Dispatch<React.SetStateAction<string>>;
}


export const UserContext = React.createContext({} as UserContextProps)


export function useUserContext() {
  return useContext(UserContext)
}

export function UserProvider( {children}: UserProviderProps) {
    const [user, setUser] = React.useState("")



    return (
        <UserContext.Provider
        value= {{
            user,
            setUser
        }}
        >
            {children}
        </UserContext.Provider>

    )
}