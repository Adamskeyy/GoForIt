import { useState } from "react";
import { Link } from "react-router-dom";
import FAB from "../components/FAB/FAB";
import Modal from "../components/Modal/Modal";

function Home() {
  const [modalShown, setModalShown] = useState(false);
  const placeName = "Tromsø";

  const modalText = (
    <>
      <p>Are you ready for Your journey to {placeName}?</p>
      <Link to={`${process.env.PUBLIC_URL}/goforit`}>
        {" "}
        <button>Yes</button>
      </Link>
      <button onClick={() => setModalShown((modalShown) => false)}>No</button>
    </>
  );

  return (
    <>
      <Modal
        show={modalShown}
        modalClosed={() => setModalShown((modalShown) => false)}
      >
        {modalText}
      </Modal>
      <FAB modalOpened={() => setModalShown((modalShown) => true)} />
    </>
  );
}

export default Home;
