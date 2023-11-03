/* eslint-disable react/style-prop-object */
import React from "react";
import {
  BottomWrapp,
  ContentContainer,
  RightSide,
} from "./StyledMainComponent";
const MainComponent = () => {
  return (
    <ContentContainer>
      <div className="image-wrapp">
        <img className="main-image" src="/images/drawers.jpg" alt="" />
      </div>
      <RightSide>
        {/* <div className="text-wrapp"> */}
        <h1 className="title">
          Shift the overall looking and feel by
          <span className="sub-title"> adding these wonderful touches to </span> furniture in your home
        </h1>
        <p className="description">
          Ever been in the room and felt like something was missing? Perhaps it
          felt slightly bare uninviting. I've got some simple tips to help you
          make any room feel complete.
        </p>
        {/* </div> */}
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
          <div className="icon-share-wrapp">
            <img src="images/icon-share.svg" alt="arrow" />
          </div>
        </BottomWrapp>
      </RightSide>
    </ContentContainer>
  );
};

export default MainComponent;
