import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledMenu = styled.ul`{
  position: absolute
}`

const StyledButton = styled.button`{
  background-color: transparent !important;
  ::after {
    vertical-align: unset;
  }  
}`

const Menu = () => {
  return (
    <StyledMenu className="nav nav-pills">
      <li className="nav-item dropdown">
        <StyledButton className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </StyledButton>
        <div className="dropdown-menu" id="dropdown-menu">
          <Link to={"/users"} className="dropdown-item">Users</Link>
          <Link to={"/repositories"} className="dropdown-item">Repositories</Link>
        </div>
      </li>
    </StyledMenu>
  )
}

export default Menu;