import React, { Component } from "react";
import Modal from "../../UI/modal/Modal";
import Auxillary from "../Auxillary";

const WithErroHandler = (WrappedComponent, axiosInstance) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.reqInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
      this.respInterceptor = axiosInstance.interceptors.request.use((req) => {
        this.setState({
          error: null,
        });
        return req;
      });
    }

    // componentWillUnmount() {
    //   this.axiosInstance.interceptors.eject(this.reqInterceptor);
    //   this.axiosInstance.interceptors.eject(this.respInterceptor);
    // }

    closeErrorModal = () => {
      this.setState({
        error: null,
      });
    };
    render() {
      return (
        <Auxillary>
          <Modal purchasing={this.state.error} clicked={this.closeErrorModal}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxillary>
      );
    }
  };
};

export default WithErroHandler;
