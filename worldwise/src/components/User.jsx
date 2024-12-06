import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";
import styles from "./User.module.css";

function User() {
  /*
CHALLENGE

4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
*/
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
