import React from 'react'

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      projectAmount: 0,
      projectDescription:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    document.querySelector("#projectName").textContent = this.state.projectName;
    document.querySelector("#projectAmount").textContent = this.state.projectAmount;
    document.querySelector("#projectDescription").textContent = this.state.projectDescription;

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div style={{ "marginTop": "25px", "marginBottom": "15px" }}>
            <h1 style={{ "font-size": "50px" }}>提案</h1>
          </div>
          <div>
            <h2>計畫名稱</h2>
            <input name="projectName" style={{ "marginTop": "15px", "marginBottom": "20px", "height": "30px" }} type="text" size={100}></input>
            <h2>每人最低贊助金額</h2>
            <input name="projectAmount" style={{ "marginTop": "15px", "marginBottom": "20px", "height": "30px" }} type="text" size={100}></input>
            <h2>計畫說明</h2>
            <input name="projectDescription" style={{ "marginTop": "15px", "marginBottom": "20px", "height": "30px" }} type="text" size={100}></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <p>Show Message Below</p>
        <div id="projectName"></div>
        <div id="projectAmount"></div>
        <div id="projectDescription"></div>
      </div>
    );
  }

}

export default CreateForm;