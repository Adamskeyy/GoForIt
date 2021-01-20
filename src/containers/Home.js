import { useState } from "react";
import { useHistory } from "react-router-dom";
import FAB from "../components/FAB/FAB";
import Modal from "../components/Modal/Modal";
import "./Home.css";

const Home = ({ placeName }) => {
  const [modalShown, setModalShown] = useState(false);

  let history = useHistory();

  const handleClick = () => {
    let path = `${process.env.PUBLIC_URL}/goforit`;

    history.push(path);
  };

  const modalText = (
    <>
      <p>Are you ready for Your journey to {placeName}?</p>
      <div className="buttonBox">
        <button className="customButton" onClick={handleClick}>
          Show me the way!
        </button>

        <button
          className="customButton"
          onClick={() => setModalShown((modalShown) => false)}
        >
          Hell no!
        </button>
      </div>
    </>
  );

  return (
    <div className="homescreen">
      <Modal
        show={modalShown}
        modalClosed={() => setModalShown((modalShown) => false)}
      >
        {modalText}
      </Modal>
      <FAB modalOpened={() => setModalShown((modalShown) => true)} />
    </div>
  );
};

export default Home;
