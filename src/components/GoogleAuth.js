import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "37737127128-q4uetebonnjf0ggr1meeeqvvdj9ptmih.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
