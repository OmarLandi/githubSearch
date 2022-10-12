interface DetailContentProps {
  label: string;
  value: string;
}

const DetailContent = (props: DetailContentProps) => {
  const { label, value } = props;
  return (
    <>
      <p className="card-text mb-0"><b className="text-muted">{label}:</b></p>
      <p className="card-text"><small className="text-muted">{value}</small></p>
    </>
  )
}

export default DetailContent;