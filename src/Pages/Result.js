import Header from "../Components/Landing/Header"
import Traduction from "../Components/Landing/Traduction"

const Result = ({history}) => {

  return (
    <>
      <Header/>
      <Traduction history={history} />
    </>
  );
}

export default Result;
