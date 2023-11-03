import { ModalWrapp } from "./StyledModal";
const Modal = () => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <ModalWrapp onClick={stopPropagation}>
      <p className="text">Share</p>
      <div className="icons-wrapp">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/icon-facebook.svg" alt="" />
        </a>
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/icon-twitter.svg" alt="" />
        </a>
        <a
          href="https://www.pinterest.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/icon-pinterest.svg" alt="" />
        </a>
      </div>
    </ModalWrapp>
  );
};

export default Modal;
