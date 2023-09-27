import React from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import DeleteScreen from "../../components/DeleteScreen/DeleteScreen";
import "./index.scss";

const Delete = () => {
  return (
    <div className="delete">
      <Header />
      <Title />
      <div className="deleteScreenDiv">
        <DeleteScreen />
      </div>
    </div>
  );
};

export default Delete;
