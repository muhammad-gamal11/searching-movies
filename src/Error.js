import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page-error">
      <h1>404</h1>
      <p>sorry, this page doesn't exist</p>
      <Link to="/" className="btn">
        back home
      </Link>
    </div>
  );
};
export default Error;
