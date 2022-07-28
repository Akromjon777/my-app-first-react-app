import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Card } from "./components/Card";
function App(props) {
  return (
    <>
      <Navbar />
      <Search />
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg"/>
          <Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"/>
          <Card img="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg"/>
        </div>
      </div>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <Card img="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"/>
          <Card img="https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"/>
          <Card img="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"/>
          <Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png"/>
        </div>
      </div>
    </>
  );
}

export default App;
