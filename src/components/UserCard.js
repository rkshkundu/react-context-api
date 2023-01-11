import { useContext } from "react";
import { UserContext } from "../user-context";

const userCard = ({ user }) => {
  const usersCtx = useContext(UserContext);

  function handleRemoveUser(id) {
    usersCtx.removeUser(id);
  }

  return (
    <div className="usercard-wrapper">
      <button
        onClick={handleRemoveUser.bind(this, user.id)}
        type="button"
        title="Click to remove user"
      >
        x
      </button>
      <p>Name : {user.name}</p>
      <p>Id : {user.id}</p>
    </div>
  );
};

export default userCard;
