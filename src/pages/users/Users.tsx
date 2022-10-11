import SearchContainer from "common/containers/searchContainer";
import UserList from "common/containers/userList";
import constants from "common/constants/users.json";

const Users = () => {
  return (
    <SearchContainer constants={constants}>
      <UserList />
    </SearchContainer>
  )
}

export default Users;