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
        <div className="parent">
            <div className = "left-form">
                  <h1>Pawtastic</h1>
            </div>
            <div className = "pet-form">
              <div className = "child-1">
                <h1>We love pets! Give us the deets about your favorite companion!</h1>
              </div>
              <div className = "child-2">

              </div>
              <div className = "child-3">

              </div>
              <div className = "child-4">

              </div>
              <div className = "child-5">

              </div>
            </div>
          </div>
        </div>
      
    )
  }
}


export default App;