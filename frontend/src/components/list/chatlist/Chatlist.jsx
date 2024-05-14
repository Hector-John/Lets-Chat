import React, { useState } from "react";
import "./Chatlist.scss";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import avatar from "../../../assets/avatar.png";
import AddUser from "./addUser/addUser";

const Chatlist = () => {
  const [add, setAdd] = useState(false);

  const toggleIcon = () => {
    setAdd(!add);
  };

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <CiSearch size={30} style={{ cursor: "pointer" }} />
          <input type="text" placeholder="Search for friends" />
        </div>
        {add ? (
          <FiMinus
            size={25}
            style={{ cursor: "pointer" }}
            className="add"
            onClick={toggleIcon}
          />
        ) : (
          <FiPlus
            size={25}
            style={{ cursor: "pointer" }}
            className="add"
            onClick={toggleIcon}
          />
        )}
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Hakheem Hakheem</span>
          <p>Amka uende ufanye kazi,,</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Hakheem Hakheem</span>
          <p>Amka uende ufanye kazi,,</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Hakheem Hakheem</span>
          <p>Amka uende ufanye kazi,,</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Hakheem Hakheem</span>
          <p>Amka uende ufanye kazi,,</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Hakheem Hakheem</span>
          <p>Amka uende ufanye kazi,,</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Hakheem Hakheem</span>
          <p>Amka uende ufanye kazi,,</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Hakheem Hakheem</span>
          <p>Amka uende ufanye kazi,,</p>
        </div>
      </div>
      {add && <AddUser />}
    </div>
  );
};

export default Chatlist;
