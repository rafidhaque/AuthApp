import React, { useState } from 'react'

const AuthContext = React.createContext();

function AuthProvider(props) {
    const [CurrectUser, setCurrectUser] = useState([])
    const [IsLoggedIn, setIsLoggedIn] = useState(false)

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