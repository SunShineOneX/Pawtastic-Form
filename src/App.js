import React from "react";
import "./App.css";


class App extends React.Component {

  constructor() {
    super();
      this.state = {
        name: "",
        breed: "",
        birthday: "",
        gender: "",
        fixed: "false",
        weight: ""
      }
    
  }
  


  render() {
    return (
      <div>
        <div className = "wrapper">

        </div>
      </div>
    )
  }
}


export default App;