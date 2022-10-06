import ProfileCard from 'common/components/cards/profileCard';
import Pagination from 'common/components/pagination';
import { useEffect, useState } from 'react';

interface UserProps {
  avatar_url: string,
  login: string,
  html_url: string
}

interface UserListProps {
  list: any[]
  addData: (step: number) => void;
  limit: number;
}

const UserList = (props: UserListProps) => {
  const { list, addData, limit } = props;
  const [step, setStep] = useState(1);
  const [ stepList, setStepList ] = useState([])

  useEffect(() => {
    if (list[step - 1]) {
      setStepList(list[step - 1]);
    }
  }, [step, list]);

  const handleChangeStep = (value: number) => {
    setStep(value);
    if (value > step && list[value - 1] === undefined) {
      addData(value);
    }
  }

  return (
    <>
      <div className="row">
        {
          stepList.map((user: UserProps, index: number) => {
            return (
              <div className="col-md-6 col-lg-4" key={index.toString()}>
                <ProfileCard
                  img={{
                    url: user.avatar_url,
                    alt: 'avatar'
                  }}
                  title={user.login}
                >
                  <a href={user.html_url} target="_blank">View profile</a>
                </ProfileCard>
              </div>
            );
          })
        }
      </div>
      <Pagination step={step} handleSelect={handleChangeStep} limit={limit}/>
    </>
  )
}

export default UserList;