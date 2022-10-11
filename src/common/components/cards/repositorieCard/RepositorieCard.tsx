import styled from 'styled-components';

interface RepositorieCardProps {
  name: string;
  full_name: string;
  created_at: string;
  description: string;
  forks: number;
  html_url: string;
  license?:  {
    name: string;
  };
  updated_at: string;
}

const RepositorieCard = (props: RepositorieCardProps) => {
  console.log(props);
  
  const {
    name,
    full_name,
    created_at,
    description,
    forks,
    html_url,
    license,
    updated_at,
  } = props;
  return (
    <div className="card border-info mb-3">
      <h5 className="card-header">{name}</h5>
      <div className="card-body">
        <h6 className="card-title">{full_name}</h6>
        <p className="card-text"><small className="text-muted">{description}</small></p>
        <p className="card-text"><small className="text-muted">Forks: {forks}</small></p>
        <p className="card-text"><small className="text-muted">Licence: {license && license.name || '-' }</small></p>
        <p className="card-text"><small className="text-muted">Created at: {created_at}</small></p>
        <p className="card-text"><small className="text-muted">Updated at: {updated_at}</small></p>
        <a href={html_url} target="_blank">Go to repository</a>
      </div>
    </div>
  )
}

export default RepositorieCard;