import { createContext, useState } from "react";

export const UserContext = createContext({
  usersList: [],
  addUser: (user) => {},
  removeUser: (userId) => {}
});

function UserContextProvider({ children }) {
  const [usersList, setUsersList] = useState([]);

  function addUser(user) {
    setUsersList((currentList) => [...currentList, user]);
  }

  function removeUser(userId) {
    setUsersList((currentList) =>
      currentList.filter((user) => userId != user.id)
    );
  }

  const value = {
    usersList: usersList,
    addUser: addUser,
    removeUser: removeUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
