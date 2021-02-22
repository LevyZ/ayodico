import React, { useState, useContext } from "react";
import '../../Sass/components/_translator.scss';
import '../../Sass/components/_result.scss'
import Field from "../form/Field";


const Traduction = ({ history}) => {

  // const { setIsAuthenticated } = useContext(AuthContext);
  console.log()

  const [traduire, setTraduire] = useState({
    mot: history.location.state.mot,
    traduction: history.location.state.traduction
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setTraduire({ ...traduire, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    history.replace("/");
  };

  return (
    <>
      <section id="result" className="form-global">
        <h3>Resultats</h3>

        <div className="form-btn">

          <div className="affichResult">
            <div>
              <b>{traduire.mot} :</b>
            </div>
            <div>
              <span>{traduire.traduction}</span>
            </div>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Traduire un autre mot
          </button>
        </div>
      </section>
    </>
  );
}

export default Traduction;
