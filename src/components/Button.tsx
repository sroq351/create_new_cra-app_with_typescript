interface Props {
  label: string;
  onButtonClick: () => void;
  type: "button";
}

export const Button = (props: Props) => {
  return (
    <button type={props.type} onClick={props.onButtonClick}>
      {props.label}
    </button>
  );
};
