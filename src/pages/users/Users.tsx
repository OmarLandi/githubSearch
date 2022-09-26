import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import NewSearch from "common/containers/newSearch/NewSearch";
import Search from "common/components/search/Search";
import UserList from "common/containers/userList/UsersList";
import { findUsers } from 'services/usersSlice';

const Users = () => {
  const dispatch = useAppDispatch();
  const [result, setResult] = useState(false);
  const users = useAppSelector((store) => store.users)

  const handleSearch = (value: string) => {
    dispatch(findUsers({ name: value }));
  };

  useEffect(() => {
    if (users.list.length > 0) {
      setResult(true);
    }
  }, [users]) 

  return result ? (
    <>
      <Search handleSearch={() => console.log()} />
      <p>Resultados: {users.total_count} </p>
      <UserList list={users.list} />
    </>
  ) : (
    <NewSearch
      title="Search users"
      description="Browse users and their profiles on GitHub"
      handleSearch={handleSearch}
    />
  )
}

export default Users;