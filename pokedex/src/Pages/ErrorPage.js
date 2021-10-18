import React from "react";
import { useHistory } from "react-router";

const ErrorPage = () => {
  const history = useHistory();

  const handleClickBack = () => {
    history.push("/");
  };

  return (
      <div>
        <h1>Oops! Algo deu errado!</h1>
        <iframe
         title="errorGif"
         src="https://giphy.com/embed/UHAYP0FxJOmFBuOiC2" 
         width="480" 
         height="361" 
         frameBorder="0" 
         class="giphy-embed" 
         allowFullScreen>
        </iframe>
        <br />
        <button onClick={handleClickBack}>Voltar à Página Inicial</button>
      </div>
  );
};

export default ErrorPage; 