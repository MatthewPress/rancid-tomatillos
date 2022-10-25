import './Error.css';

const Error = ({ errorMessage }) => {
  return (
    <h2 className="error--display">
      We apologize, there seems to have been an error with the server
    </h2>
  );
}

export default Error;