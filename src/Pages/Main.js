import Header from "../Components/Landing/Header"
import Translator from "../Components/Landing/Translator"

const Main = ({history}) => {

  return (
    <>
      <Header/>
      <Translator history={history}/>
    </>
  );
}

export default Main;
