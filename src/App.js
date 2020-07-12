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
        fixed: "",
        weight: "",
        formCompleted: false
      }
    
  }
  
  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onBreedChange = (event) => {
    this.setState({
      breed: event.target.value
    })
  }

  onBirthdayChange = (event) => {
    this.setState({
      birthday: event.target.value
    })
  }

  isPetMale = (event) => {
    event.preventDefault()
    this.setState({
      gender: "male"
    })
  }

  isPetFemale = (event) => {
    event.preventDefault()
    this.setState({
      gender: "female"
    })
  }

  isPetFixed = (event) => {
    event.preventDefault()
    this.setState({
      fixed: false
    })
  }

  isPetNotFixed = (event) => {
    event.preventDefault()
    this.setState({
      fixed: true
    })
  }

  isWeightLight = (event) => {
    event.preventDefault()
    this.setState({
      weight: "0-25 lbs"
    })
  }

  isWeightModerate = (event) => {
    event.preventDefault()
    this.setState({
      weight: "25-50 lbs"
    })
  }

  isWeightHeavy = (event) => {
    event.preventDefault()
    this.setState({
      weight: "50-75 lbs"
    })
  }
  
  isWeightExtraHeavy = (event) => {
    event.preventDefault()
    this.setState({
      weight: "75-100 lbs"
    })
  }

  handleFormSubmission = (event) => {
    event.preventDefault()
    this.setState({
      formCompleted: true
    })
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
                <input type="name" placeholder="Enter pet's name" className="input-text" value={this.state.name} onChange={this.onNameChange}></input>
              </div>
              <div className = "child-3">
              <p>Upload a photo</p>

              </div>
              <div className = "child-4">
                <p>Breed</p>
                <input type="breed" placeholder="Enter pet's breed" className="input-text" value={this.state.breed} onChange={this.onBreedChange}></input>
              </div>
              <div className = "child-5">
                <p>Birthday</p>
                <input type="birthday" placeholder="Enter pet's birthdate" className="input-text" value={this.state.birthday} onChange={this.onBirthdayChange}></input>
              </div>
              <div className = "child-6">
                <p>Gender</p>
                <button className="button" onClick={this.isPetMale}>Male</button>
                <button className="button" onClick={this.isPetFemale}>Female</button>
                
              </div>
              <div className = "child-7">
                <p>Spayed or Neutered</p>
                <button className="button" onClick={this.isPetFixed}>Yes</button>
                <button className="button" onClick={this.isPetNotFixed}>No</button>
              </div>
              <div className = "child-8">
                <p>Weight</p>
                <button className="button" onClick={this.isWeightLight}>0-25 lbs</button>
                <button className="button" onClick={this.isWeightModerate}>25-50 lbs</button>
              </div>
              <div className = "child-9">
                <button className="button" onClick={this.isWeightHeavy}>50-75 lbs</button>
                <button className="button">75-100 lbs</button>

              </div>
              <div className = "child-10">
                <button className="button">Back</button>
      
              </div>
              <div className = "child-11">
                <button className="button">Next</button>
              </div>
            </div>
          </div>
        
      
    )
  }
}


export default App;