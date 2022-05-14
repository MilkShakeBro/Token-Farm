import React, { useEffect, useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap"

/* Main Component */
import { Header } from "./features/Header"
import { Main } from "./features/Main"
import { ChainId, DAppProvider } from "@usedapp/core"
import { Container } from "@material-ui/core"

/* Tutorial Component */
import { Arbitrage } from "./introduction/Arbitrage";
import { Contract } from "./introduction/Contract";
import { Datafeed } from "./introduction/Datafeed";
import { Defi } from "./introduction/Defi";
import { Exchange } from "./introduction/Exchange";
import { Tutorial } from "./introduction/Tutorial";

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <BrowserRouter>
      <div>
        <Navbar
          color="warning"
          expand="md"
          dark
        >
          <NavbarBrand href="/">
            TokenFarmPlayground
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar>
      <Nav navbar>
        <NavItem className="navitem">
          <NavLink href="/defi">
            Defi
          </NavLink>
        </NavItem>
        <NavItem className="navitem">
          <NavLink href="/tutorial">
            Tutorial
          </NavLink>
        </NavItem>
        <NavItem className="navitem">
          <NavLink href="/contract">
            Contract
          </NavLink>
        </NavItem>
        <NavItem className="navitem">
          <NavLink href="/datafeed">
            Datafeed
          </NavLink>
        </NavItem>
        <NavItem className="navitem">
          <NavLink href="/exchange">
            Exchange
          </NavLink>
        </NavItem>
        <NavItem className="navitem">
          <NavLink href="/arbitrage">
            Arbitrage
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={
          <DAppProvider config={{
            supportedChains: [ChainId.Kovan, ChainId.Rinkeby],
            notifications: {
              expirationPeriod: 1000,
              checkInterval: 1000
            }
          }}>
            <Header />
            <Container maxWidth="md">
              <Main />
            </Container>
          </DAppProvider>
        }>
        </Route>
        <Route path="/arbitrage" element={<Arbitrage />} />
        <Route path="/contract"  element={<Contract />} />
        <Route path="/datafeed"  element={<Datafeed />} />
        <Route path="/defi"      element={<Defi />} />
        <Route path="/exchange"  element={<Exchange />} />
        <Route path="/tutorial"  element={<Tutorial />} />
      </Routes>
    </BrowserRouter>
  )
}

/*

*/
export default App
