import React from "react";
import Badge from "../components/Badge";
import api from "../api";
import "../Pages/styles/BadgeNew.css";
import logo from "../assets/platziconf-logo.svg";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("caca");
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    return (
      <div>
        <div className="BadgeNew__hero">
          <img src={logo} alt="" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FirstName"}
                lastName={this.state.form.lastName || "LastName"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter || " Twitter"}
                email={this.state.form.email || "email"}
                avatar="https://secure.gravatar.com/avatar/c6c98104c03217cc37658fc1cb3773b6"
                footer="PlatziConf"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
