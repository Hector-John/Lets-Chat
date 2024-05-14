import React, { useEffect, useRef } from "react";
import "./Chats.scss";
import avatar from "../../assets/avatar.png";
import mic from "../../assets/mic.png";
import img from "../../assets/img.png";
import camera from "../../assets/camera.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chats = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const setEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior: "smooth"})
  })

  return (
    <div className="chats">
      <div className="top">
        <div className="user">
          <img src={avatar} alt="" />
          <div className="texts">
            <span>Jahkeed Juan</span>
            <p>Never stay down</p>
          </div>
        </div>
        <div className="icons">
          <FaPhoneAlt size={20} style={{ cursor: "pointer" }} />
          <IoVideocamOutline size={20} style={{ cursor: "pointer" }} />
          <FaInfoCircle size={20} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="center">
        <div className="message owner">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quae hic porro laborre iusto quia natus.
            </p>
            <span>1 hr ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
        <div className="message">
          <img src={avatar} alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quae hic porro laboriosam vus inventore iusto quia natus.
            </p>
            <span>1 hr ago</span>
          </div>
        </div>
        <div className="message owner">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quae hic porro
            </p>
            <span>1 hr ago</span>
          </div>
        </div>
        <div ref={endRef}></div>

        <div className="message">
          <img src={avatar} alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit od dolores dolorem unde voluptatibus
              inventore iusto quia natus.
            </p>
            <span>1 hr ago</span>
          </div>
        </div>
        <div className="message owner">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quae hic porro laboriosam vitae soluta quia illo commodi non a?
              Totam quod dolores
            </p>
            <span>1 hr ago</span>
          </div>
        </div>
        <div ref={endRef}></div>

        <div className="message">
          <img src={avatar} alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            </p>
            <span>1 hr ago</span>
          </div>
        </div>
        <div className="message owner">
          <div className="texts">
            <img src={avatar} alt="" />

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quae hic porro laboriosam vitae soluta quia illo commodi non a?
            </p>
            <span>1 hr ago</span>
          </div>
        </div>
        <div ref={endRef}></div>

      </div>
      <div className="bottom">
        <div className="icons">
          <img src={img} alt="" />
          <img src={camera} alt="" />
          <img src={mic} alt="" />
        </div>
        <input
          type="text"
          placeholder="Write your message here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <MdEmojiEmotions
            size={22}
            style={{ cursor: "pointer" }}
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={setEmoji} />
          </div>
        </div>
        <button className="sendBtn">Send</button>
      </div>
    </div>
  );
};

export default Chats;
