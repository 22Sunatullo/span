import { Header } from "./componets/Header/Header";
import { MainSection } from "./componets/MainSection/MainSection";
import { Wrapper } from "./componets/wraper";

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <MainSection/>
      </Wrapper>
    </div>
  );
}

export default App;
