import "./styles.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UserContextProvider from "./user-context";

export default function App() {
  const users = [
    { name: "User1", id: "id1" },
    { name: "User2", id: "id2" },
    { name: "User3", id: "id3" }
  ];

  return (
    <UserContextProvider>
      <div>
        <AddUser />
        <UserList />
      </div>
    </UserContextProvider>
  );
}
