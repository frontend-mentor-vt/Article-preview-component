import MainComponent from "./components/main/MainComponent";
import styled from "styled-components";

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
  return (
    <AppWrapper>
      <MainComponent />
    </AppWrapper>
  );
}

export default App;
