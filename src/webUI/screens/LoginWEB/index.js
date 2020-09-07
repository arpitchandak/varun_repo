import React, { Component } from "react";
import "../../styles/WebStyles.css";
import { Form, Button } from "react-bootstrap";
import UsedColors from "../../../styles/UsedColors";
export default class LoginWEB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropSelect: "Admin",
      rpassword: "",
      isloading: true
    };
  }

 checkUserType(){
    if (this.state.dropSelect === "Admin" && this.state.rpassword === "admin") {
        alert("Admin")
    } else  if (this.state.dropSelect === "Sales" && this.state.rpassword === "sales") {
        alert("Sales")
    } else  if (this.state.dropSelect === "Placement" && this.state.rpassword === "placement") {
        alert("Place")
    } else  if (this.state.dropSelect === "Collection" && this.state.rpassword === "collection") {
        alert("Collection")
    } else {
        alert("Error")
    } 
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="mainDiv">
        <img
          style={{ height: "80px", width: "90px", marginBottom: 10 }}
          src={require("../../assets/logo.png")}
        />
        <h4
          style={{
            color: "#fff",
            paddingTop: 10,
            marginBottom: 30,
          }}
        >
          APP NAME
        </h4>
        <Form.Group
          controlId="formGridState"
          style={{ width: 200, borderRadius: 10, border: "2px solid #D37BFF" }}
        >
          <Form.Control
            as="select"
            onChange={(e) => {
              this.setState({
                dropSelect: e.target.value,
              });
            }}
            defaultValue="Admin"
          >
            <option value="Admin">Admin</option>
            <option value="Sales">Sales</option>
            <option value="Placement">Placement</option>
            <option value="Collection">Collection</option>
          </Form.Control>
        </Form.Group>

        <input
          type="password"
          security
          placeholder="Password"
          value={this.state.rpassword}
          style={{
            margin: 5,
            padding: 10,
            borderRadius: 10,
            border: "2px solid #D37BFF",
          }}
          onChange={(e) => {
            this.setState({ rpassword: e.target.value });
          }}
        />

        <Button
          onClick={() => {
            this.checkUserType();
          }}
          style={{
            backgroundColor: UsedColors.btnColor,
            color: "#fff",
            fontWeight: "bold",
            width: 200,
            marginTop: 30,
            border: "0px",
          }}
        >
          Get Started
        </Button>
      </div>
    );
  }
}
