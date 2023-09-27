import React from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import EditScreen from "../../components/EditScreen/EditScreen";
import "./index.scss";

const Edit = () => {
  return (
    <div className="edit">
      <Header />
      <Title />
      <div className="deleteScreenDiv">
        <EditScreen />
      </div>
    </div>
  );
};

export default Edit;
