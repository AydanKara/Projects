import Button from "./Button";
import Card from "./Card";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.onConfirm} /* onClick={onConfirm} */
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="error-modal">
      <Card className="error-modal-content">
        <header className="bg-red-700 p-4 rounded-t-xl">
          <h2 className="text-center text-xl text-white">
            {props.error.title} {/* {title} */}
          </h2>{" "}
          {/* Name is required! */}
        </header>
        <section className="p-4">{props.error.message}</section> {/* message */}
        {/* Please enter a name! */}
        <footer className="p-4 flex justify-end">
          <Button onClick={props.onConfirm} className="w-32">
            {" "}
            {/* onConfirm */}
            Done
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = props;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} error={error}/>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
