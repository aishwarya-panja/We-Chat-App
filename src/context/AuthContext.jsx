import { onAuthStateChanged } from "firebase/auth";
import {createContext, useEffect, useState} from "react" ;
import {auth} from "../firebase" ;

export const AuthContext = createContext()         // createContext is used to pass down the authentification state through the component tree

export const AuthContextProvider = ({children}) =>{       // AuthContextProvider is a component that wraps its children with the context provider.
    const [currentUser, setCurrentUser] = useState({})   // "currentUser" variable will hold the current user's authentication information

    useEffect (() =>{
        const unsub = onAuthStateChanged(auth, (user) =>{    // onAuthStateChanged() - listens for changes in the authentication state (such as a user signing in or out).
            setCurrentUser(user) ;
        });

        return () =>{
            unsub() ;  // a clean up function to prevent memory leaking
        };
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );
};