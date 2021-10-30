import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onValue, ref, update } from "@firebase/database";
import { db } from "../../services/firebase";
import { changeName, toggleShowName } from "../../store/profile/actions";
import {
  selectId,
  selectShowName,
  selectUserName,
} from "../../store/profile/selectors";
import { Form } from "../Form";
import "./styles.scss";

const Profile = () => {
  const name = useSelector(selectUserName);
  const userId = useSelector(selectId);
  const showName = useSelector(selectShowName);
  const dispatch = useDispatch();

  useEffect(() => {
    const userDbRef = ref(db, `profile/${userId}`);
    onValue(userDbRef, (snapshot) => {
      const data = snapshot.val();
      const username = data?.username;
      dispatch(changeName(username));
    });
  }, [userId, dispatch]);

  const handleShowName = () => {
    dispatch(toggleShowName);
  };

  const handleClick = (name: string) => {
    update(ref(db, `profile/${userId}`), {
      username: name,
    });
    dispatch(changeName(name));
  };

  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <Form text="Изменить" label="Имя" onClick={handleClick} />
        <label className="profileLabel">
          <input type="checkbox" onChange={handleShowName} />
          Show name
        </label>
        <div>{showName && <p>{name}</p>}</div>
      </div>
    </div>
  );
};

export default Profile;
