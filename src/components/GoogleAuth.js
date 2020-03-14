import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "37737127128-q4uetebonnjf0ggr1meeeqvvdj9ptmih.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  renderSignedIn() {
    if (this.props.userIsSignedIn === null) {
      return null;
    } else if (this.props.userIsSignedIn) {
      return (
        <div onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign out
        </div>
      );
    } else {
      return (
        <div onClick={this.onSignInClick}>
          <i className="red google icon" />
          <font color="#de5246">Sign in</font>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderSignedIn()}</div>;
  }
}

const mapStateToProps = state => {
  return { userIsSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
