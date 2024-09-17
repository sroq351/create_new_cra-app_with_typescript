import styles from "./Button.module.css";
interface Props {
  label: string;
  onButtonClick: () => void;
  type: "button";
}

export const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      onClick={props.onButtonClick}
      className={styles.button}
    >
      {props.label}
    </button>
  );
};
