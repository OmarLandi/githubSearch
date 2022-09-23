import NewSearch from "common/containers/newSearch/NewSearch";

const Repositories = () => {
  const handleSearch = () => {
    console.log('Click search user');
  };

  return (
    <NewSearch
      title="Search repositories"
      description="Browse repositories on GitHub"
      handleSearch={handleSearch}
    />
  );
}

export default Repositories;