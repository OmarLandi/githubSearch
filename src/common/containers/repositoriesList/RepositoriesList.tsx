import RepositorieCard from 'common/components/cards/repositorieCard';
import Pagination from 'common/components/pagination';
import { useEffect, useState } from 'react';

interface RepositoriesProps {
  name: string;
  full_name: string;
  created_at: string;
  description: string;
  forks: number;
  html_url: string;
  license:  {
    name: string;
  };
  updated_at: string;
}

interface RepositoriesListProps {
  list?: any[]
  addData?: (step: number) => void;
  limit?: number;
}

const RepositoriesList = (props: RepositoriesListProps) => {
  const { list, addData, limit } = props;
  const [step, setStep] = useState(1);
  const [ stepList, setStepList ] = useState([])

  useEffect(() => {
    if (list && list[step - 1]) {
      setStepList(list[step - 1]);
    }
  }, [step, list]);

  const handleChangeStep = (value: number) => {
    setStep(value);
    if (list && addData && value > step && list[value - 1] === undefined) {
      addData(value);
    }
  }

  return (
    <>
      <div className="row">
        {
          stepList.map((repositorie: RepositoriesProps, index: number) => {
            return (
              <div className="col-md-6 col-lg-4" key={index.toString()}>
                <RepositorieCard {...repositorie}/>
              </div>
            );
          })
        }
      </div>
      <Pagination step={step} handleSelect={handleChangeStep} limit={limit || 0}/>
    </>
  )
}

export default RepositoriesList;