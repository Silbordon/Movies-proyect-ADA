import { Button } from "antd";
import { Link } from "react-router-dom";
import "../index.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-404"></div>
      <p>Sorry, the page you visited does not exist.</p>
      <Link to="/">
        {" "}
        <Button type="primary"> Home</Button>
      </Link>
    </div>
  );
};

export default Error404;
