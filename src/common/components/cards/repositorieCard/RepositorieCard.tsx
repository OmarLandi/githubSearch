import Moment from 'moment';
import DetailContent from 'common/components/detailContent';

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
  owner: {
    login: string;
    html_url: string;
  };
  updated_at: string;
}

const RepositorieCard = (props: RepositorieCardProps) => {
  const {
    owner,
    name,
    created_at,
    description,
    forks,
    html_url,
    license,
    updated_at,
  } = props;

  const contentData = [
    { label: 'Created', value: Moment(created_at).format('DD/MM/YYYY')},
    { label: 'Last update', value: Moment(updated_at).format('DD/MM/YYYY')},
    { label: 'Forks', value: forks.toString()},
    { label: 'Licence', value: license && license.name || '-'},
  ]
  
  return (
    <div className="card border-info mb-3">
      <h5 className="card-header">{name}</h5>
      <div className="card-body">
        <h6 className="card-title">{description}</h6>
        <div className="row">
          <div className="col-12 mb-1">
            <p className="card-text mb-0"><b className="text-muted">Owner profile:</b></p>
            <a href={owner.html_url} target="_blank">{owner.login}</a>
          </div>
          <>
            {
              contentData.map((element, index) => (
                <div className="col-6 mb-1" key={name + element.label}>
                  <DetailContent label={element.label} value={element.value} />
                </div>
              ))
            }
          </>
        </div>
      </div>
      <div className="card-footer">
        <a href={html_url} target="_blank">Go to repository</a>
      </div>
    </div>
  )
}

export default RepositorieCard;