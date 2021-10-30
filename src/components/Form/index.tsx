import { useRef, useState, useEffect } from "react";
import { Fab, TextField } from "@material-ui/core";
import "./styles.scss";

interface IProps {
  onClick: (mes: string) => void;
  label: string;
  text: string;
}

export const Form = ({ onClick, label, text }: IProps) => {
  const [message, setMessage] = useState("");

  const changeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e: any) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }

    onClick(message);
    setMessage("");
  };

  const isDisabled = () => {
    return !message.trim();
  };

  return (
    <form className="messageForm" onSubmit={sendMessage}>
      <div>
        <TextField value={message} onChange={changeMessage} label={label} />
      </div>
      <div>
        <Fab color="secondary" onClick={sendMessage} disabled={isDisabled()}>
          {text}
        </Fab>
      </div>
    </form>
  );
};
