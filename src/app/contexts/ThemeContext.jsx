import React, { createContext, useState } from "react";

// JE CREER UN CONTEXT ET LE REND IMPORTABLE
export const StatusUserContext = createContext();


function ThemeUserContextProvider(props) {
    // J INITIALISE LE PROPS A METTRE DANS LE CONTEXTE
    const [isOnline, setIsOnline] = useState(true);

    return (
        <StatusUserContext.Provider value={{ isOnline, setIsOnline }}>
            {props.children}
        </StatusUserContext.Provider>
    )




}

export default ThemeUserContextProvider;