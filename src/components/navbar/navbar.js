import { Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction, HeaderMenuItem, HeaderMenu, HeaderNavigation } from 'carbon-components-react';
import { Wallet20 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Navbar(props){
    const envs = useSelector(state => state.envs.value)
    return(
        <Header aria-label="IBM Platform Name">
        <HeaderName element={Link} to="/" prefix="IBM">
          Blockchain Asset Manager
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem element={Link} isCurrentPage to="/home"> Home </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/assets">Assets</HeaderMenuItem>
          <HeaderMenu aria-label="Environments" menuLinkName="Environments">
            {
              envs.map((env)=> <HeaderMenuItem href="#">{env.nome}</HeaderMenuItem>)
            }
          </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
            <Link to="envconfig">
                <HeaderGlobalAction aria-label="Search">
                    <Wallet20 />
                </HeaderGlobalAction>
            </Link>
        </HeaderGlobalBar>
      </Header>
    )
}



export default Navbar;