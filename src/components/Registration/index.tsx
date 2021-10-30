import { useState } from "react";
import { useHistory } from "react-router";
import { TextField, Button } from "@material-ui/core";
import "./styles.scss";

interface IProps {
  onLogin: (login: string, pass: string) => Promise<void>;
  onSignUp: (login: string, name: string, pass: string) => Promise<void>;
  type: string;
}

export const Registration = ({ onLogin, onSignUp, type }: IProps) => {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();

  const loginChange = (e: any) => {
    setLogin(e.target.value);
  };

  const nameChange = (e: any) => {
    setName(e.target.value);
  };

  const passChange = (e: any) => {
    setPass(e.target.value);
  };

  const handleClick = () => {
    setLogin("");
    setName("");
    setPass("");

    if (type === "login") {
      onLogin(login, pass).then(() => {
        history.push("/profile");
      });
    } else {
      onSignUp(login, name, pass).then(() => {
        history.push("/profile");
      });
    }
  };

  const keyUp = (e: any) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="loginCont">
      <h2>{type === "login" ? "Login:" : "Sign Up:"}</h2>

      <div>
        <form className="loginForm" onKeyUp={keyUp}>
          <TextField
            type="text"
            placeholder="Login"
            value={login}
            onChange={loginChange}
          />

          {type === "signup" && (
            <TextField
              type="text"
              placeholder="Name"
              value={name}
              onChange={nameChange}
            />
          )}

          <TextField
            type="password"
            placeholder="Password"
            value={pass}
            onChange={passChange}
          />

          <Button variant="outlined" onClick={handleClick}>
            {type === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};
