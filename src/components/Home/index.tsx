import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import "./styles.scss";

interface IProps {
  authed: boolean;
  onLogout: () => void;
}

const Home = ({ authed, onLogout }: IProps) => {
  const history = useHistory();

  const handleLogin = () => history.push("/login");
  const handleSignUp = () => history.push("/signup");
  const handleLogout = () => onLogout();

  return (
    <div className="homeCont">
      <h2>Home</h2>

      <div>
        {!authed ? (
          <div className="homeBtnsCont">
            <Button variant="outlined" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="outlined" onClick={handleSignUp}>
              Sign up
            </Button>
          </div>
        ) : (
          <Button variant="outlined" onClick={handleLogout}>
            Sign out
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
