import { useState, useContext } from "react";
import { UserContext } from "../user-context";

const addUser = () => {
  const [user, setUser] = useState({ name: "" });
  const usersCtx = useContext(UserContext);

  function addUserHandler() {
    if (!user.name) {
      alert("Enter user name");
    } else {
      usersCtx.addUser({
        name: user.name,
        id: `user-${Math.floor(Math.random() * 100 + 1)}`
      });
      setUser({ name: "" });
    }
  }

  function changeUserHandler(e) {
    setUser({ name: e.target.value });
  }

  return (
    <div className="adduser-wrapper">
      <input
        type="text"
        placeholder="Add user name"
        value={user.name}
        onChange={changeUserHandler}
      />
      <button onClick={addUserHandler} type="button">
        Add User
      </button>
    </div>
  );
};

export default addUser;
