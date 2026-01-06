import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";

const Set = styled.section`
display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;

`;
function App() {
  return (
    <main>
      <Header />
      <Set>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Set>
    </main>
  );
}

export default App;


 