import { Button } from "./components/Button";
import { Input } from "./components/input/Input";

function App() {
  const handleClick = () => {
    console.log("button clicked");
  };
  const showInput = () => {
    console.log();
  };
  return (
    <main>
      <Button label="click me" type="button" onButtonClick={handleClick} />
      <Input placeholder="Input" onInputChange={showInput} />
    </main>
  );
}

export default App;
