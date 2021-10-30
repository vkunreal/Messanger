import React from "react";
import "./styles.scss";

interface IProps {
  author: string;
  text: string;
  messClass: string;
}

export const Message = React.memo(({ author, text, messClass }: IProps) => {
  const className = `messageContainer ${messClass}`;

  return (
    <div className={className}>
      <div>{author}:</div>
      <div className="message">{text}</div>
    </div>
  );
});
