import React, { Component } from "react";
import Classes from "./ContactData.module.css";
import Button from "../../../UI/button/Button";
import axiosInstance from "../../../../src/axios-order";
import Spinner from "../../../UI/spinner/Spinner";
import Input from "../../../UI/forms/input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name",
        },
        validation: {
          required: true,
        },
        value: "",
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your e-mail",
        },
        validation: {
          required: true,
        },
        value: "",
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your street",
        },
        validation: {
          required: true,
        },
        value: "",
        valid: false,
        touched: false,
      },
      deliveryType: {
        elementType: "select",
        elementConfig: {
          options: ["Fast", "Regular"],
        },
        validation: {
          required: true,
        },
        value: "Fast",
        valid: true,
        touched: false,
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your postalCode",
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        value: "",
        valid: false,
        touched: false,
      },
    },
    isInValidToSubmit: true,
    spinning: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ spinning: true });
    let orderData = {};
    for (let inputIdentifier in this.state.orderForm) {
      orderData[inputIdentifier] = this.state.orderForm[inputIdentifier].value;
    }
    let order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      order: orderData,
    };

    axiosInstance
      .post("/orders.json", order)
      .then((data) => {
        console.log("data:", data);
        this.setState({ spinning: false });
        console.log("state", this.state);
        this.props.history.push("/");
      })
      .catch((e) => {
        console.log("Error:", e);
        this.setState({ spinning: false });
      });
  };

  isValid = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length === rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length === rules.maxLength && isValid;
    }
    return isValid;
  };

  updateInputValue = (event, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedOrderFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedOrderFormElement.value = event.target.value;
    updatedOrderFormElement.touched = true;
    updatedOrderFormElement.valid = this.isValid(
      updatedOrderFormElement.value,
      updatedOrderForm[inputIdentifier].validation
    );

    updatedOrderForm[inputIdentifier] = updatedOrderFormElement;
    let isInValidforSubmission = true;
    for (let inputIdentifier in updatedOrderForm) {
      isInValidforSubmission =
        updatedOrderForm[inputIdentifier].valid && isInValidforSubmission;
    }
    console.log(isInValidforSubmission);
    this.setState({
      orderForm: updatedOrderForm,
      isInValidToSubmit: !isInValidforSubmission,
    });
  };

  render() {
    const contactInfoArray = [];

    for (let key in this.state.orderForm) {
      contactInfoArray.push({
        ...this.state.orderForm[key],
        id: key,
      });
    }
    let progress = 0;
    contactInfoArray.forEach((ele) => {
      if (ele.valid === true) {
        progress++;
      }
    });
    return this.state.spinning ? (
      <Spinner />
    ) : (
      <form
        onSubmit={(event) => {
          this.orderHandler(event);
        }}
      >
        <div className={Classes.ContactData}>
          <h1> ENTER YOUR CONTACT DATA</h1>
          <progress value={progress} max={5} />
          {contactInfoArray.map((ele) => {
            progress++;
            return (
              <Input
                elementType={ele.elementType}
                elementConfig={ele.elementConfig}
                value={ele.value}
                key={ele.id}
                touched={ele.touched}
                valid={ele.valid}
                changed={(event) => {
                  this.updateInputValue(event, ele.id);
                }}
              />
            );
          })}
          <Button
            btnType="Success"
            disabled={this.state.isInValidToSubmit}
            click={this.orderHandler}
          >
            ORDER
          </Button>
        </div>
      </form>
    );
  }
}
export default ContactData;
