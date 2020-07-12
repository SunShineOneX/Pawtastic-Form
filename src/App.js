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
      
              <div className = "child-1">
                <h2>We love pets! Give us the deets about your favorite companion!</h2>
              </div>
              <div className = "child-2">
                <p>Name</p>
                <input type="text" placeholder="Enter pet's name" className="input-text"></input>
              </div>
              <div className = "child-3">
              <p>Upload a photo</p>

              </div>
              <div className = "child-4">
                <p>Breed</p>
              </div>
              <div className = "child-5">
                <p>Birthday</p>
              </div>
              <div className = "child-6">

              </div>
              <div className = "child-7">

              </div>
              <div className = "child-8">

              </div>
              <div className = "child-9">

              </div>
              <div className = "child-10">

              </div>
            </div>
          </div>
        
      
    )
  }
}


export default App;