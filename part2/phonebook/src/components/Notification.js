import React from "react";

const Notification = (props) => {
  console.log(props);
  const { message, error } = props.message;

  if (error === null) return null;
  if (error === true) {
    return <div className="error">{message}</div>;
  }

  return <div className="aproved">{message}</div>;
};

export default Notification;
