import { createContext } from "react";
import { doctors } from "../assets/assets";
import Banner from "../components/Banner";


export var AppContext=createContext()

var AppContextProvider=(props)=>{
    
    var currencySymbol="$"


    var value={
        doctors,
        Banner,
        currencySymbol
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider