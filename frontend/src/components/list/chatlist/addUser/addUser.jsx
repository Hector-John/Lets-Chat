import React from "react";
import "./addUser.scss";
import avatar from "../../../../assets/avatar.png";

const AddUser = () => {
  return (
    <div className="addUser">
      <form action="">
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src={avatar} alt="" />
          <span>John</span>
        </div>
        <button>Add user</button>
      </div>
    </div>
  );
};

export default AddUser;
