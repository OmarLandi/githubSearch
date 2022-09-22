interface JumbotronProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;  
}

const Jumbotron = (props: JumbotronProps) => {
  const { title, description, children } = props;
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{description}</p>
      <hr className="my-4" />
      {children}
    </div>
  );
}

export default Jumbotron;