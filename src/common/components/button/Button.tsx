import classNames from 'classnames';
// import styled from 'styled-components';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick: () => void;
  text: string;
}

const Button = (props: ButtonProps) => {
  const {
    type= 'button',
    onClick,
    className,
    text } = props;

  return (
    <button
      className={classNames("btn btn-outline-primary my-2 my-sm-0", className)}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
