import React, { Component } from "react";
import Classes from "./Modal.module.css";
import Auxillary from "../../hoc/Auxillary";
import Backdrop from "../backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.nextProps !== this.props ||
      this.nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Auxillary>
        <Backdrop show={this.props.purchasing} clicked={this.props.clicked} />
        <div
          className={Classes.Modal}
          style={{
            transform: this.props.purchasing
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.purchasing ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxillary>
    );
  }
}

export default Modal;
