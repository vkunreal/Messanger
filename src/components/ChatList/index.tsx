import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import { deleteChatFb } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { selectId } from "../../store/profile/selectors";
import "./styles.scss";

interface IProps {
  chatId: string;
}

export default function ChatList({ chatId }: IProps) {
  const chats = useSelector(selectChats);
  const userId = useSelector(selectId);
  const dispatch = useDispatch();

  const handleDeleteChat = (e: any) => {
    const id = e.target.getAttribute("ind");
    dispatch(deleteChatFb(id));
  };

  const names = chats.map((elem) => elem.name);

  const isHaveUser = (users: any) => {
    let isHave = false;

    Object.keys(users).forEach((item) => {
      if (users[item] === userId) isHave = true;
    });

    return isHave;
  };

  return (
    <List>
      {chats.map((elem, index) => {
        let isInd: boolean;

        if (chatId) {
          isInd = chatId === elem.id;
        } else {
          isInd = false;
        }

        if (isHaveUser(elem.users)) {
          return (
            <Link to={`/chats/${elem.id}`} key={elem.id} className="chats-a">
              <ListItem button selected={isInd} className="listItem">
                <div className="chatItem">
                  {names[index]}
                  <span id={elem.id} onClick={handleDeleteChat}>
                    &#10006;
                  </span>
                </div>
              </ListItem>
            </Link>
          );
        }
      })}
    </List>
  );
}
