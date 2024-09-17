import { Button } from "./components/button/Button";
import { InputStartsWithA } from "./components/input/Input";

function App() {
  const handleClick = () => {
    console.log("button clicked");
  };
  const showInput = (input: string) => {
    console.log(input);
  };
  return (
    <main>
      <Button label="click me" type="button" onButtonClick={handleClick} />
      <br></br>
      <br></br>

      <InputStartsWithA
        placeholder="type string starting with 'a'"
        onInputChange={showInput}
      />
    </main>
  );
}

export default App;
