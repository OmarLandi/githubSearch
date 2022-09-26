import ProfileCard from 'common/components/cards/profileCard';

interface UserProps {
  avatar_url: string, login: string, html_url: string
}

interface UserListProps {
  list: UserProps[]
}

const UserList = (props: UserListProps) => {
  const { list } = props;
  return (
    <div className="row">
      {
        list.map((user: UserProps, index: number) => {
          return (
            <div className="col-md-6 col-lg-4" key={index.toString()}>
              <ProfileCard
                img={{
                  url: user.avatar_url,
                  alt: 'avatar'
                }}
                title={user.login}
              >
                <a href={user.html_url} target="_blank">Profile</a>
              </ProfileCard>
            </div>
          );
        })
      }
    </div>
  )
}

export default UserList;