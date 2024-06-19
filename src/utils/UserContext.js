import { createContext } from "react";
//if piece of data is used at multiple places then place it in context
const UserContext = createContext({
  userName: "Default User",
});
export default UserContext;
