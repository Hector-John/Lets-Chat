import React from "react";
import "./Details.scss";
import avatar from "../../assets/avatar.png";
import { IoMdDownload } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Details = () => {
  return (
    <div className="details">
      <div className="user">
        <img src={avatar} alt="" />
        <h2>Hakheem Hakheem</h2>
        <p>descrepton descrirption</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <FaAngleUp size={20} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Help & Privacy</span>
            <FaAngleUp size={20} style={{ cursor: "pointer" }} />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <FaAngleDown size={20} style={{ cursor: "pointer" }} />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src={avatar} alt="" />
                <span>Photo 2022 png</span>
              </div>
              <IoMdDownload size={20} style={{ cursor: "pointer" }} />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src={avatar} alt="" />
                <span>Photo 2022 png</span>
              </div>
              <IoMdDownload size={20} style={{ cursor: "pointer" }} />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src={avatar} alt="" />
                <span>Photo 2022 png</span>
              </div>
              <IoMdDownload size={20} style={{ cursor: "pointer" }} />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src={avatar} alt="" />
                <span>Photo 2022 png</span>
              </div>
              <IoMdDownload size={20} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <FaAngleUp size={20} style={{ cursor: "pointer" }} />
          </div>
          <div>
            <button>Block User</button>
            <button className="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
