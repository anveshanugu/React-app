import Auxillary from "../../hoc/Auxillary";
import Classes from "./Layout.module.css";
import Toolbar from "../Navigation/toolbar/Toolbar";
import SideDrawer from "../Navigation/sideDrawer/SideDrawer";
import { Component } from "react";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };
  closeSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  toogleDrawer = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  render() {
    return (
      <Auxillary>
        <Toolbar DrawerToogle={this.toogleDrawer} />
        <SideDrawer
          show={this.state.showSideDrawer}
          close={this.closeSideDrawerHandler}
        />
        <main className={Classes.Content}>{this.props.children}</main>
      </Auxillary>
    );
  }
}

export default Layout;
