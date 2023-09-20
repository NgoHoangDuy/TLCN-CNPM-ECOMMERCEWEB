import React, { useState } from "react";

import "../sass/layout/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const [hiddenFC, setHiddenFc] = useState(true);
  const [expandFC, setExpandFc] = useState(false);
  const moreClickHandler = () => {
    setHiddenFc(!hiddenFC);
    setExpandFc(!expandFC);
  };

  return (
    <div className={` ftWrap grid `}>
      <ul>
        <li>Back-end:   Đỗ Ngọc Duy Hưng</li>
        <li>Front-end:  Ngô Hoàng Duy</li>
      </ul>
    </div>
  );
};

export default Footer;
