import "./Card.css";

const Card = (props) => {
  return (
    <li className="card">{props.children}</li>
  )
}

export default Card