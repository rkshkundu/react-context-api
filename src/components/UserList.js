import { useContext } from "react";
import { UserContext } from "../user-context";

import UserCard from "./UserCard";

const userList = ({ users }) => {
  const usersCtx = useContext(UserContext);
  const usersList = usersCtx.usersList;

  return (
    <div className="userlist-wrapper">
      {usersList.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
      {!usersList.length && <h4>There is no user, please add one.</h4>}
    </div>
  );
};

export default userList;
