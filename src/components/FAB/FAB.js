import { useState, useEffect } from "react";
import "./FAB.css";

const FAB = ({ modalOpened }) => {
  const [showFAB, setshowFAB] = useState(false);

  useEffect(() => {
    setshowFAB((showFAB) => true);
  }, []);

  return (
    <button
      className="fab"
      onClick={modalOpened}
      style={{
        transform: showFAB ? "translateX(0)" : "translateX(-100vw)",
      }}
    >
      <i
        className="material-icons"
        style={{
          fontSize: "36px",
          color: "white",
        }}
      >
        arrow_forward
      </i>
    </button>
  );
};

export default FAB;
