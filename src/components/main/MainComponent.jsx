/* eslint-disable react/style-prop-object */
import React from "react";
import Modal from "../modal/Modal";
import useMediaQuery from "../../hooks/mediaQuery";
import {
  BottomWrapp,
  ContentContainer,
  RightSide,
} from "./StyledMainComponent";

const MainComponent = (props) => {
  const { isOpened, handleModal } = props;
  const { screenWidth } = useMediaQuery();
  return (
    <ContentContainer>
      <div className="image-wrapp">
        <img className="main-image" src="/images/drawers.jpg" alt="" />
      </div>
      <RightSide>
        <h1 className="title">
          Shift the overall looking and feel by
          <span className="sub-title">
            {" "}
            adding these wonderful touches to{" "}
          </span>{" "}
          furniture in your home
        </h1>
        <p className="description">
          Ever been in the room and felt like something was missing? Perhaps it
          felt slightly bare uninviting. I've got some simple tips to help you
          make any room feel complete.
        </p>

        <BottomWrapp>
          <div className="bottom-image-wrapp">
            <img
              className="bottom-image"
              src="/images/avatar-michelle.jpg"
              alt="avatar"
            />
            <div className="avatar-description">
              <h2 className="avatar-name">Michelle Appletone</h2>
              <p className="data">28 June 2020</p>
            </div>
          </div>
          <div className="share-icon-total-wrapp">
            <div
              className={
                isOpened ? "icon-share-wrapp-back" : "icon-share-wrapp-main"
              }
              onClick={handleModal}
            >
              {isOpened ? (
                <>
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="26"
                  >
                    <g transform="scale(2)">
                      <path
                        fill="#FFFFFF"
                        d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                      />
                    </g>
                  </svg>
                  <Modal />
                </>
              ) : (
                <>
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="26"
                  >
                    <g transform="scale(2)">
                      <path
                        fill="#6E8098"
                        d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                      />
                    </g>
                  </svg>
                </>
              )}
            </div>
          </div>
        </BottomWrapp>
      </RightSide>
    </ContentContainer>
  );
};

export default MainComponent;
