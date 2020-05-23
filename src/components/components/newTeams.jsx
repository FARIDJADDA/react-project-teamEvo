import React from "react";

class NewTeam extends React.Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // trim sert a enlever les espaces des deux cotés
    if (this.state.firstName.trim() && this.state.lastName.trim()) {
      this.props.onAddTeam(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
    });
  };

  render() {
    return (
      <>
        <h2>Add a new Team</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='firstName'
              className='form-control'
              name='firstName'
              onChange={this.handleInputChange}
              value={this.state.firstName}
            />
          </div>
          <div className='form-group'>
            <textarea
              cols='19'
              rows='8'
              placeholder='lastName'
              className='form-control'
              name='lastName'
              onChange={this.handleInputChange}
              value={this.state.lastName}></textarea>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Add Team
            </button>
            <button
              type='button'
              className='btn btn-warning'
              onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default NewTeam;
