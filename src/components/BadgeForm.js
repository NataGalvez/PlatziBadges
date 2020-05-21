import React from "react";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("hice click");
  };
  render() {
    return (
      <div>
        <h1>
          New <br />
          Attendant{" "}
        </h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="firstName"
              value={this.props.formValues.firstName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="lastName"
              value={this.props.formValues.lastName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              onChange={this.props.onChange}
              name="email"
              value={this.props.formValues.email}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter </label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="twitter"
              value={this.props.formValues.twitter}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
