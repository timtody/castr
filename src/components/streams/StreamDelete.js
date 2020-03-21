import React from "react";

import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <>
      <div className="ui button negative">Delete</div>
      <div className="ui button">Cancel</div>
    </>
  );
  return (
    <div>
      StreamDelete
      <Modal
        header="Delete stream"
        content="Do you really want to delete the stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
