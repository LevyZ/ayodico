import React, { useState, useContext } from "react";
import '../../Sass/components/_translator.scss';
import Field from "../form/Field";
import {getAllTraductions, getBeteTraduction} from "../../Services/firestore";


const Translator = ({ history }) => {

  // const { setIsAuthenticated } = useContext(AuthContext);

  const [traduire, setTraduire] = useState({
    mot: "",
    traduction: ""
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setTraduire({ ...traduire, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
     //  // await AuthAPI.authenticate(credentials);
      getBeteTraduction(traduire.mot).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {

            if(doc) {
              const location = {
                pathname: '/result',
                state: {
                  mot: traduire.mot,
                  traduction: doc.data().bt
                }
              }
              history.replace(location);
            }
          });
      })
    } catch (error) {
      console.log(error)
      setError(
        "Aucun traduction n'existe pour ce mot !"
      );
    }
    setError(
      "Aucun traduction n'existe pour ce mot !"
    );
  };

  return (
    <>
      <section className="form-global">
        <h1>Dictionnaire Français - Bété</h1>
        <form onSubmit={handleSubmit}>
          <Field
            name="mot"
            label="Mot : "
            value={traduire.mot}
            onChange={handleChange}
            placeholder="Entrez le mot à traduire"
            type="texte"
            error={error}
          />

          <div className="form-btn">
            <button type="submit">
              Traduire
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Translator;
