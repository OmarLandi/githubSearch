import NavBar from "common/components/navBar/NavBar"
import Menu from 'common/components/menu';
import logo from 'common/assets/images/logo.jpg';
import styled from 'styled-components';

const StyledLogo = styled.img`{
  border-radius: 15px;
}`

const Nav = () => {
  return (
    <NavBar>
      <div className="container-fluid">
        <Menu />
        <div className="row w-100 align-items-center justify-content-center">
          <div className="col-md-6 text-center">
            <p className="text-white mb-0">
              <StyledLogo src={logo} alt="logo" height={30} />
              <b className="align-middle ml-2">GitHub-Search</b>
            </p>
          </div>
        </div>
      </div>
    </NavBar>
  )
}

export default Nav;