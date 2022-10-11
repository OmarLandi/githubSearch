import styled from 'styled-components';
import Jumbotron from "common/components/jumbotron";
import Search from 'common/components/search/Search';

interface StartSearchProps {
  title: string;
  description: string;
  handleSearch: any;
}

const StyledContainer = styled.div`{
  min-height: calc(100vh - 80px)
}`

const StartSearch = (props: StartSearchProps) => {
  const { title, description, handleSearch } = props;

  return (
    <StyledContainer className="row align-items-center">
      <div className="col">
        <Jumbotron 
          title={title}
          description={description}
        >
          <Search handleSearch={handleSearch} />
        </Jumbotron>
      </div>
    </StyledContainer>
  );
}

export default StartSearch;