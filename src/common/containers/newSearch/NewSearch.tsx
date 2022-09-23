import styled from 'styled-components';
import Jumbotron from "common/components/jumbotron";
import Search from 'common/components/search/Search';

interface NewSearchProps {
  title: string;
  description: string;
  handleSearch: () => void;
}

const StyledContainer = styled.div`{
  min-height: calc(100vh - 80px)
}`

const NewSearch = (props: NewSearchProps) => {
  const { title, description, handleSearch } = props;

  return (
    <StyledContainer className="row align-items-center">
      <div className="col">
        <Jumbotron 
          title={title}
          description={description}
        >
          <Search onSearch={handleSearch} />
        </Jumbotron>
      </div>
    </StyledContainer>
  );
}

export default NewSearch;