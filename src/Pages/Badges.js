import React from "react";
import logo from "../assets/badge-header.svg";
import "./styles/Badges.css";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import Api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await Api.badges.list();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={logo} alt="" className="Badges_conf-logo" />
            </div>
          </div>

          <div className="Badges__buttons">
            <Link to="Badges/new" className="btn btn-primary">
              New Badge{" "}
            </Link>
          </div>
        </div>
        <BadgesList badgesList={this.state.data} />
      </div>
    );
  }
}

export default Badges;
