import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    if (this.props.user.loggedin != true) {
      this.props.redirect();
    }
  }
  render() {
    if (this.props.user.loggedin != true) {
      this.props.redirect();

      return "hi";
    }
    return "div";
  }
}
function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    redirect: () => {
      dispatch(push("/signup"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
