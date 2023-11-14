import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export function usePeronalContexts(){
    return(
        useContext(UserContext)
    )
}