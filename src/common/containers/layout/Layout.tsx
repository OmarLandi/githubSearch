import Nav from 'common/containers/nav';
import styled from 'styled-components';

interface LayoutProps {
  children?: React.ReactNode;
}

const StyledLayout = styled.div`{
  min-height: 100vh;
}`;

const Layout = (props: LayoutProps ) => {
  const { children } = props;

  return (
    <StyledLayout className="bg-light">
      <Nav />
      <div className="container pt-3">
        {children}
      </div>
    </StyledLayout>
  )
}

export default Layout;