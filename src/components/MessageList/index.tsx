import { useSelector } from "react-redux";
import { Message } from "../Message";
import { selectMessages } from "../../store/messages/selectors";
import { selectUserName } from "../../store/profile/selectors";
import "./styles.scss";

interface IProps {
  chatId: any;
}

export const MessagesList = ({ chatId }: IProps) => {
  const messages = useSelector(selectMessages);
  const author = useSelector(selectUserName);

  return (
    <div className="messagesContainer">
      {chatId &&
        Object.values(messages[chatId]).map((el: any) => (
          <Message
            messClass={author === el.author ? "authMess" : "foreignMess"}
            key={el.id}
            author={el.author}
            text={el.text}
          />
        ))}
    </div>
  );
};
