import { useState } from "react";
import "./Banner.css";

import { HiOutlineX } from "react-icons/hi";

function Banner({ text }) {
  const [close, setClose] = useState(false);

  const closeModal = () => {
    setClose(true);
  };

  return (
    !close && (
      <div className="banner">
        <p className="bannerText">{text}</p>
        <button className="closeIcon" type="button" onClick={closeModal}>
          <HiOutlineX size="20" />
        </button>
      </div>
    )
  );
}

export default Banner;
