import { createContext } from "react"

const UserContext = createContext({
    user:{
        "name" : 'Mayuri',
        "email": "mayuri@gmail.com"
    }
});

export default UserContext;