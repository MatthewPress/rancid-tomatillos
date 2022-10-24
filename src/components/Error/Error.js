const Error = ({ errorMessage }) => {
  return (
    <h2 className="Error">
      We apologize, there seems to have been an error with the server {errorMessage}
    </h2>
  );
}

export default Error;