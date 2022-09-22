import classNames from 'classnames';
import styled from 'styled-components';

interface NavBarProps {
  children?: React.ReactNode;
  className?: string;
}

const StyledNav = styled.nav`{
  height: 60px;
}`;

const NavBar = (props: NavBarProps) => {
  const { children, className } = props;

  return (
    <StyledNav className={classNames("navbar navbar-expand-lg navbar-dark bg-dark", className)}>
      {children}
    </StyledNav>
  )
}

export default NavBar;