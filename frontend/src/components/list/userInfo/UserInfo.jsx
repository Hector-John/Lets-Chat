import React from "react";
import "./UserInfo.scss";
import { RxAvatar } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <RxAvatar size={50} style={{ cursor: "pointer" }} />
        <h2>John Smith</h2>
      </div>
      <div className="icons">
        <MdOutlineMoreHoriz size={20} style={{ cursor: "pointer" }} />
        <IoVideocamOutline size={20} style={{ cursor: "pointer" }} />
        <FaRegEdit size={20} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default UserInfo;
