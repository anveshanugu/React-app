import React, { PureComponent } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import { Route, Switch } from "react-router-dom";
import Checkout from "./containers/checkout/Checkout";
import Orders from "../src/containers/orders/Orders";
import ContactData from "../src/containers/checkout/contactData/ContactData";

class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          {/* <Route path="/checkout/contact-data" exact component={ContactData} /> */}
          <Route path="/orders" exact component={Orders} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
