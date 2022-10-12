import styled from 'styled-components';

const StyledSpinner = styled.div`{
  width: 60px;
  height: 60px;
}`

const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <StyledSpinner className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </StyledSpinner>
    </div>
  )
}

export default Loading;