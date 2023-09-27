import React, { useState, useEffect } from "react";
import "./index.scss";
import Lapis from "../../assets/lapis.png";
import Trash from "../../assets/lixeira.png";
import { Link } from "react-router-dom";

const Task = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    loadSavedData();
  }, []);

  const loadSavedData = () => {
    const savedItems = localStorage.getItem("taskItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }

    const savedCheckboxState = localStorage.getItem("checkboxState");
    if (savedCheckboxState) {
      setIsChecked(JSON.parse(savedCheckboxState));
    }
  };

  useEffect(() => {
    localStorage.setItem("taskItems", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("checkboxState", JSON.stringify(isChecked));
  }, [isChecked]);

  function addItem() {
    if (!newItem) {
      alert("Coloque uma tarefa!");
    } else {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };

      setItems((oldList) => [...oldList, item]);

      setNewItem("");
    }
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);

    localStorage.setItem("taskItems", JSON.stringify(newArray));
  }

  const [showAdd, setShowDiv] = useState(false);

  const openAdd = () => {
    setShowDiv(true);
  };

  function closeAdd() {
    setShowDiv(false);
  }

  return (
    <div className="task">
      <div className="headerTask">
        <h1>Tarefa</h1>
        <h1>Status</h1>
        <h1>Opções</h1>
      </div>

      <div id="linha"></div>

      <div className="taskPanel">
        {showAdd && (
          <div className="taskPanel__extraTask">
            <input
              type="text"
              name="extraTask"
              id="extraTask"
              placeholder="Adicione uma tarefa..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button
              onClick={() => {
                addItem();
                closeAdd();
              }}
            >
              Adicionar
            </button>
          </div>
        )}

        <div className="ListTasks">
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <p>{item.value} </p>
                  <input
                    checked={isChecked}
                    type="checkbox"
                    name="status"
                    id="status"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <div className="icons">
                    <Link to={"Edit"}>
                      <img src={Lapis} alt="" />
                    </Link>
                    <Link to={"Delete"}>
                      <img
                        src={Trash}
                        onClick={() => deleteItem(item.id)}
                        alt=""
                      />
                    </Link>{" "}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="taskPanel__newTask">
          <h3>Nova tarefa..</h3>
          <p onClick={openAdd} id="push">
            {" "}
            +{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
