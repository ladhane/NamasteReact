import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Footer = ()=> {
    const {user} = useContext(UserContext);
    return(
        <div className="fixed bottom-0 left-0 z-20 w-full bg-slate-100 shadow dark:bg-gray-900">
        <p data-testid="footer" className="text-lg text-center mb-0 p-5"> This site is developd by {user.name}. You can contact the team via email {user.email}</p>
        </div>
    )
}
