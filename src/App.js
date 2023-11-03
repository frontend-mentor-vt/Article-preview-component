import MainComponent from "./components/main/MainComponent";
import styled from "styled-components";
import { useState } from "react";

const AppWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
