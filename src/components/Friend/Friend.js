import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  const nevigate = useNavigate();
  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    nevigate(path);
  };
  return (
    <div>
      <h2>Name: {name}</h2>
      <Link to={/friend/ + id}>Show friend</Link>
      <button onClick={showFriendDetail}>
        {username} - {id}
      </button>
    </div>
  );
};

export default Friend;
