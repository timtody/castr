import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Modal from "../Modal";
import history from "../../history";
import { getStream, deleteStream } from "../../actions";
import StreamList from "./StreamList";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  renderContent() {
    return (
      <div>
        <p>Do you really want to delete the following stream?</p>
        <p>Title: {this.props.stream.title}</p>
        <p>Description: {this.props.stream.description}</p>
      </div>
    );
  }

  onDeleteStream = () => {
    this.props.deleteStream(this.props.stream.id);
  };

  renderActions() {
    return (
      <>
        <div onClick={this.onDeleteStream} className="ui button negative">
          Delete
        </div>
        <Link to={"/"} className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  render() {
    return (
      <div>
        <StreamList />
        <Modal
          header="Delete stream"
          content={this.props.stream ? this.renderContent() : null}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, deleteStream })(
  StreamDelete
);
