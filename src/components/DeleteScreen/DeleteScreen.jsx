import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const DeleteScreen = () => {
  return (
    <div className="deleteScreen">
      <h1>Deseja excluir esse item?</h1>
      <h2>Colocar as descrições das tarefas aqui.</h2>
      <div className="buttons">
        <Link to={"/"}>
          <button className="noButton">Não</button>
        </Link>
        <Link to={"/"}>
          <button className="yesButton">Sim</button>
        </Link>
      </div>
    </div>
  );
};

export default DeleteScreen;
