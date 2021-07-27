import React, { Component } from "react";
import Order from "../../components/order/order/Order";
import axiosInstance from "../../axios-order";
import WithErroHandler from "../../hoc/withErrorHandler/WithErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    spinning: false,
  };

  componentDidMount() {
    this.setState({ spinning: true });

    axiosInstance
      .get("/orders.json")
      .then((response) => {
        let responseArray = [];
        for (let key in response.data) {
          responseArray.push({
            ...response.data[key],
            id: key,
          });
        }
        this.setState({
          orders: responseArray,
          spinning: false,
        });
      })
      .catch((error) => {
        this.setState({ spinning: true });
        console.log("Orders.js:Error", error);
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((res) => {
          return (
            <Order
              ingredients={res.ingredients}
              key={res.id}
              price={res.price}
            />
          );
        })}
      </div>
    );
  }
}
export default WithErroHandler(Orders, axiosInstance);
