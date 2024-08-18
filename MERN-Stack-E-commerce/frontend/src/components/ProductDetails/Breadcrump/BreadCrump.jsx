import "./BreadCrump.css"

const BreadCrump = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">Man</a>
          </li>
          <li>
            <a href="#">Pants</a>
          </li>
          <li>Ridley High Waist</li>
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrump;
