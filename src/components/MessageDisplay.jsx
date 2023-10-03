import { useParams } from "react-router-dom";
// About
function MessageDisplay() {
  // let { message } = useParams();

  return <h1>Message: {message}</h1>;
}

export default MessageDisplay;
