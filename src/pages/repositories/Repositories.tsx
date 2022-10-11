import SearchContainer from "common/containers/searchContainer";
import RepositoriesList from "common/containers/repositoriesList";
import constants from "common/constants/repositories.json";

const Repositories = () => {
  return (
    <SearchContainer constants={constants}>
      <RepositoriesList />
    </SearchContainer>
  );
}

export default Repositories;
