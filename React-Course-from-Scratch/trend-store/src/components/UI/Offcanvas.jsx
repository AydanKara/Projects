import { Fragment } from "react"
import "./Offcanvas.css"

const Offcanvas = (props) => {
  return (
    <Fragment>
        <div className="backdrop" onClick={props.onClose} />
        <div className="offcanvas">
            <div className="content">{props.children}</div>
        </div>
    </Fragment>
  )
}

export default Offcanvas