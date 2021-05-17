import React, { useState } from 'react'
import './App.css';
import Todolist from "./Todolist";
function App() {


  const [input_list, setinput_list] = useState("");
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinput_list(event.target.value);
  }
  const listOfItems = () => {
    setitems((oldItems) => {
      return [...oldItems, input_list];
    })
    setinput_list("");
  };
  const deleteItem = (id) => {
    setitems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" value={input_list} onChange={itemEvent} />
          <button onClick={listOfItems} >+</button>
          <ol>
            {
              items.map((itemsval, index) => {
                return (
                  <Todolist
                    key={index}
                    id={index}
                    text={itemsval}
                    onselect={deleteItem}
                  />
                )
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App

