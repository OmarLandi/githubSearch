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

const StyledSearch = styled(Search)`{
  & .invalid-feedback {
    margin-left: -70px;
  }
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
          <StyledSearch handleSearch={handleSearch} className="justify-content-center"/>
        </Jumbotron>
      </div>
    </StyledContainer>
  );
}

export default StartSearch;