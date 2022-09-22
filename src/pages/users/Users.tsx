import styled from 'styled-components';
import Jumbotron from "common/components/jumbotron";
import Search from 'common/components/search/Search';

const StyledContainer = styled.div`{
  min-height: calc(100vh - 80px)
}`

const Users = () => {

  const handleSearch = () => {
    console.log('Click search user');
  };

  return (
    <StyledContainer className="row align-items-center">
      <div className="col">
        <Jumbotron 
          title="Search users"
          description="Browse users and their profiles on GitHub"
        >
          <Search onSearch={handleSearch} />
        </Jumbotron>
      </div>
    </StyledContainer>
  )
}

export default Users;