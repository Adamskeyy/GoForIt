import React from "react";

const FAB = ({ modalOpened }) => {
  return (
    <button className="fab" onClick={modalOpened}>
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
