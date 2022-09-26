import styled from 'styled-components';

interface JumbotronProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;  
}

const StyledJumbotron = styled.div`{
  border-radius: 50px;
}`

const Jumbotron = (props: JumbotronProps) => {
  const { title, description, children } = props;
  return (
    <StyledJumbotron className="jumbotron text-center">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{description}</p>
      <hr className="my-4" />
      {children}
    </StyledJumbotron>
  );
}

export default Jumbotron;