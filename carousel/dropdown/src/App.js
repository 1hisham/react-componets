
import "./App.css";
import { useState } from "react";

const list = ["India", "Us", "Canada", "Russia"];
function App() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(list[0]);

  function clickHandler() {
    setOpen((isOpen) => !isOpen);
  }
  function listHandler(item) {
    setTitle(item);
  }

  return (
    <div className="App">
      <div className="dropdown" onClick={clickHandler}>
        {title}
        {open && (
          <ul className="list">
            {list.map((item) => {
              return (
                <li
                  key={item}
                  onClick={() => {
                    listHandler(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
