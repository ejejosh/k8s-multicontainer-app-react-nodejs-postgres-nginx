import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      This is the Other Page!
      <p>
        Welcome to the other page of the application.
      </p>
      <br />
      <br />
      <Link to="/">Go back to the home page</Link>
    </div>
  );
};

export default OtherPage;
