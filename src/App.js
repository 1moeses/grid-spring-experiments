import React, { useState } from "react";
import sample from "lodash-es/sample";
import { nanoid } from "nanoid";

import "./styles.css";
import DraggableGrid from "./DraggableGrid";

const GRADIENTS = [
  { gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" },
  { gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  { gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)" },
  { gradient: "linear-gradient(135deg, #a645de 0%, #4e1370 100%)" },
  { gradient: "linear-gradient(135deg, #fc4903 0%, #fc7f4e 100%)" },
  { gradient: "linear-gradient(135deg, #28b526 0%, #6afc68 100%)" }
];

const App = () => {
  const [items, setItems] = useState(
    GRADIENTS.map((item) => ({ id: nanoid(), ...item }))
  );

  const handleRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setItems((items) => [...items, { id: nanoid(), ...sample(GRADIENTS) }]);
  };

  return (
    <div
      style={{
        height: 500,
        width: 300,
        overflowY: "scroll",
        overflowX: "hidden"
      }}
    >
      <DraggableGrid
        items={items}
        removeItem={handleRemove}
        addItem={handleAdd}
      />

      <button className="addButton" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default App;
