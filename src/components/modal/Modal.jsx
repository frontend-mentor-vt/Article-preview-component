import { MediaModalWrapp, MainModalWrapp } from "./StyledModal";
import useMediaQuery from "../../hooks/mediaQuery";

const Modal = (props) => {
  const { action } = props;
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  const { screenWidth } = useMediaQuery();
  return (
    <>
      {screenWidth >= 500 ? (
        <MainModalWrapp onClick={stopPropagation}>
          <p className="text">Share</p>
          <div className="icons-wrapp">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon-facebook.svg" alt="facebook" />
            </a>
            <a
              href="https://twitter.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon-twitter.svg" alt="twitter" />
            </a>
            <a
              href="https://www.pinterest.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon-pinterest.svg" alt="pinterest" />
            </a>
          </div>
        </MainModalWrapp>
      ) : (
        <MediaModalWrapp onClick={stopPropagation}>
          <div className="left-side-wrapper">
            <p className="text">Share</p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon-facebook.svg" alt="facebook" />
            </a>
            <a
              href="https://twitter.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon-twitter.svg" alt="twitter" />
            </a>
            <a
              href="https://www.pinterest.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon-pinterest.svg" alt="pinterest" />
            </a>
          </div>
          <div className="share-icon-wrapp" onClick={action}>
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
            >
              <g transform="scale(1)">
                <path
                  fill="#FFFFFF"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </g>
            </svg>
          </div>
        </MediaModalWrapp>
      )}
    </>
  );
};

export default Modal;
