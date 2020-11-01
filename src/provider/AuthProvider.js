import React, { useState } from 'react'
import { exp } from 'react-native-reanimated';

const AuthContext = React.createContext();

function AuthProvider(props) {
    [CurrectUser, setCurrectUser] = useState([])
    [IsLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <AuthContext.Provider
            value = {{
                CurrectUser: CurrectUser, 
                setCurrectUser:setCurrectUser,
                IsLoggedIn: IsLoggedIn,
                setIsLoggedIn: setIsLoggedIn
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};