import NewSearch from "common/containers/newSearch/NewSearch";

const Users = () => {
  const handleSearch = () => {
    console.log('Click search user');
  };

  return (
    <NewSearch
      title="Search users"
      description="Browse users and their profiles on GitHub"
      handleSearch={handleSearch}
    />
  )
}

export default Users;