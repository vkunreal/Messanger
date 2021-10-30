import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatFb } from "../../store/chats/actions";
import { addMessageDb } from "../../store/messages/actions";
import { Fab, TextField } from "@material-ui/core";
import { selectId } from "../../store/profile/selectors";
import "./styles.scss";

export const AddChatForm = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const userId = useSelector(selectId);

  const dispatch = useDispatch();

  const changeName = (e: any) => setName(e.target.value);
  const changeUser = (e: any) => setUser(e.target.value);

  const isDisabled = () => !(name.trim() && user.trim());

  const clickBtn = () => {
    const id = `chat-${Date.now()}`;

    dispatch(addChatFb(name, userId, user, id));
    dispatch(addMessageDb(id, "Test", "Bot", false, false));

    setName("");
    setUser("");
  };

  const keyUp = (e: any) => {
    if (e.key === "Enter") {
      clickBtn();
    }
  };

  return (
    <form className="chatForm" onKeyUp={keyUp}>
      <section>
        <TextField value={name} onChange={changeName} label="Имя чата" />
        <TextField
          value={user}
          onChange={changeUser}
          label="Email пользователя"
        />
      </section>

      <section>
        <Fab color="secondary" disabled={isDisabled()} onClick={clickBtn}>
          Добавить
        </Fab>
      </section>
    </form>
  );
};
