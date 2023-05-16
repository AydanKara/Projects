import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Offcanvas.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const OffcanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Offcanvas = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      
    </Fragment>
  );
};

export default Offcanvas;
