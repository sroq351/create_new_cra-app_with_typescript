import { useState } from "react";

interface Props {
  placeholder: string;
  onInputChange: () => void;
}

export const Input = (props: Props) => {
  const [input, setInput] = useState(" ");

  const inputChange = (event: any) => {
    const value: string = event.target.value;
    setInput(value);
  };

  return (
    <input
      placeholder={props.placeholder}
      value={input}
      onChange={inputChange}
    ></input>
  );
};
