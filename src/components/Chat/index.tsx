import { useEffect } from "react";
import { MessagesList } from "../MessageList";
import { Form } from "../Form";
import { addMessageDb } from "../../store/messages/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import { selectUserName } from "../../store/profile/selectors";
import "./styles.scss";

interface IProps {
  chatId: string;
}

export const setScroll = () => {
  const div = document.getElementsByClassName("messagesContainer")[0];
  div.scrollTop = div.scrollHeight;
};

export default function Chat({ chatId }: IProps) {
  const messages = useSelector(selectMessages);
  const name = useSelector(selectUserName);

  const dispatch = useDispatch();

  const sendMessage = (message: string) => {
    dispatch(addMessageDb(chatId, message, name));
  };

  useEffect(() => setScroll(), []);

  return (
    <div>
      <section>
        <MessagesList chatId={chatId} />
      </section>

      <section className="messageFormCont">
        <Form onClick={sendMessage} label="Сообщение" text="Отправить" />
      </section>
    </div>
  );
}
