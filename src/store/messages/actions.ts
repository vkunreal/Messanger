import { IMessage } from "./interfaces";
import { ref, onValue, set } from "firebase/database";
import { setScroll } from "../../components/Chat";
import { db } from "../../services/firebase";
import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_CHAT_WITH_MESSAGES = "MESSAGES:ADD_CHAT_WITH_MESSAGES";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessage = (chatId: string, text: string, author: string) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    text,
    author,
  },
});

export const addChatWithMessage = (id: string) => ({
  type: ADD_CHAT_WITH_MESSAGES,
  payload: {
    id,
  },
});

const setMessages = (messages: IMessage[]) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const addMessageWithReply =
  (chatId: string, text: string, author: string) => (dispatch: any) => {
    dispatch(addMessage(chatId, text, author));

    if (author.toLowerCase() === AUTHORS.HUMAN) {
      setTimeout(() => {
        dispatch(addMessage(chatId, "Hey, I'm Bot!", AUTHORS.BOT));
      }, 500);
    }
  };

export const initMessages = () => (dispatch: any) => {
  const messagesDbRef = ref(db, "messages");

  onValue(messagesDbRef, (snapshot) => {
    const data = snapshot.val();

    dispatch(setMessages(data || {}));
  });
};

export const addMessageDb =
  (
    chatId: string,
    text: string,
    author: string,
    botAnswer = false,
    setScrolling = true
  ) =>
  () => {
    const id = `message-${Date.now()}`;

    const messagesDbRef = ref(db, `messages/${chatId}/${id}`);

    set(messagesDbRef, {
      author,
      text,
      id,
    }).then(() => {
      if (setScrolling) setScroll();
    });

    if (botAnswer) {
      setTimeout(() => {
        const id = `message-${Date.now()}`;
        const messagesDbRef = ref(db, `messages/${chatId}/${id}`);

        set(messagesDbRef, {
          author: AUTHORS.BOT,
          text: `Hey, I'm ${AUTHORS.BOT}`,
          id,
        }).then(() => {
          if (setScrolling) setScroll();
        });
      }, 500);
    }
  };
