import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 m-0 p-0">
    // </div>
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "25px",
        height: "25px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loader;
