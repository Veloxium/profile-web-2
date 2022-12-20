import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="btn primary font-semibold tracking-wide">
      <Link to="/contact">
        <h4>CONTACT ME</h4>
      </Link>
    </div>
  );
}

export default Button