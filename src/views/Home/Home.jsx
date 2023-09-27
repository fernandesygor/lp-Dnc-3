import React from "react";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Tasks";
import Title from "../../components/Title/Title";
import "./index.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Title />
      <Task />
    </div>
  );
};

export default Home;
