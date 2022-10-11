import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import NewSearch from "common/containers/newSearch/NewSearch";
import Search from "common/components/search/Search";
import UserList from "common/containers/userList/UsersList";
import { findUsers, clearSearch } from 'services/usersSlice';
import styled from 'styled-components';

const StyledContainer = styled.div`{
  position: relative;
  min-height: calc(100vh - 80px);
  padding-bottom: 80px;
}`

const Users = () => {
  const dispatch = useAppDispatch();
  const [result, setResult] = useState(false);
  const users = useAppSelector((store) => store.users)

  const handleSearch = (value: string) => {
    dispatch(clearSearch());
    dispatch(findUsers({ name: value }));
  };

  const addData = (step: number) => {
    if (step > users.currentPage) {
      dispatch(findUsers({ page: step }));
    }
  }

  useEffect(() => {
    if (users.list.length > 0) {
      setResult(true);
    }
  }, [users]) 

  return result ? (
    <StyledContainer>
      <Search value={users.searchValue} handleSearch={handleSearch} />
      <p>Resultados: {users.totalCount} </p>
      <UserList list={users.list} addData={addData} limit={users.pagination}/>
    </StyledContainer>
  ) : (
    <NewSearch
      title="Search users"
      description="Browse users and their profiles on GitHub"
      handleSearch={handleSearch}
    />
  )
}

export default Users;