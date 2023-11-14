import MainComponent from "./components/main/MainComponent";
import { useState } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;

  @media screen and (max-width: 500px) {
    & {
      height: auto;
      display: block;
      box-shadow: none;
      border-radius: 16px;
    }
  }
`;
function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleModal = () => {
    setIsOpened(!isOpened);
  };
  const closeModal = () => {
    if (isOpened === true) {
      setIsOpened(false);
    }
  };

  return (
    <AppWrapper onClick={closeModal}>
      <MainComponent handleModal={handleModal} isOpened={isOpened} />
    </AppWrapper>
  );
}

export default App;
