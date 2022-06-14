import React from "react";
import "../styles/Nav.css";
const Nav = (props) => {
  // console.log(props);
  return (
    <div className="nav">
      <div className="title">
        <h1>Edvora</h1>
      </div>
      <div className="user">
        <h2 className="user_name">{props.user.name}</h2>
        <img alt="avatar" src={props.user.url} className="avatar_img" />
      </div>
    </div>
  );
};

export default Nav;
