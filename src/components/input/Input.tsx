import { useState } from "react";

interface Props {
  placeholder: string;
  onInputChange: (input: string) => void;
}

export const InputStartsWithA = (props: Props) => {
  const [input, setInput] = useState(" ");

  const inputChange = (event: any) => {
    const value: string = event.target.value;
    setInput(value);

    const isInputStartsWithA = value.startsWith("a");
    if (isInputStartsWithA) {
      props.onInputChange(value);
    }
  };

  return (
    <input
      placeholder={props.placeholder}
      value={input}
      onChange={inputChange}
    />
  );
};
