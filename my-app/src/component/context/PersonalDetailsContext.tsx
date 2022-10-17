import React, { useContext} from "react";

type PersonalDetailsProviderProps = {
    children: React.ReactNode
}
export type PersonalDetailsContextProps = {
    name: string;
    setName:React.Dispatch<React.SetStateAction<string>>;
    streetAddress:string;
    setStreetAddress: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    land: string;
    setLand: React.Dispatch<React.SetStateAction<string>>;
}


export const PersonalDetailsContext = React.createContext({} as PersonalDetailsContextProps)


export function usePersonalDetailsContext() {
  return useContext(PersonalDetailsContext)
}

export function PersonalDetailsProvider( {children}: PersonalDetailsProviderProps) {
    const [name, setName] = React.useState("");
    const [streetAddress, setStreetAddress] = React.useState("")
    const [email, setEmail]= React.useState("");
    const [land, setLand]= React.useState("");


    return (
        <PersonalDetailsContext.Provider
        value= {{
            name,
            setName,
            streetAddress,
         setStreetAddress,
            email,
            setEmail,
            land,
            setLand
        }}
        >
            {children}
        </PersonalDetailsContext.Provider>

    )
}